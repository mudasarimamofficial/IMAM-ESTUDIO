-- IMAM ESTUDIO | Database Schema & Row Level Security (RLS) policies
-- target database: Supabase (PostgreSQL)

-- 1. ENUMS & EXTENSIONS
CREATE TYPE public.user_role AS ENUM (
  'guest',
  'buyer',
  'client',
  'freelancer',
  'verified_expert',
  'senior_expert',
  'founder',
  'admin',
  'super_admin',
  'moderator',
  'applicant',
  'member',
  'editor'
);

-- 2. SCHEMAS
-- Profiles table linked to Supabase auth.users
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  role public.user_role NOT NULL DEFAULT 'guest',
  full_name TEXT,
  avatar_url TEXT,
  organization_id UUID,
  stripe_connect_id TEXT,
  rating NUMERIC(3,2) DEFAULT 5.00,
  vetted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Organizations table
CREATE TABLE IF NOT EXISTS public.organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  owner_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Link profile to organization
ALTER TABLE public.profiles 
  ADD CONSTRAINT fk_profiles_organization FOREIGN KEY (organization_id) REFERENCES public.organizations(id) ON DELETE SET NULL;

-- Services catalog for pricing logic
CREATE TABLE IF NOT EXISTS public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  base_cost NUMERIC(12,2) NOT NULL DEFAULT 0.00,
  margin NUMERIC(5,4) NOT NULL DEFAULT 0.0000, -- Loss-leader margins can be negative (e.g. -0.1000)
  price NUMERIC(12,2) NOT NULL DEFAULT 0.00, -- base_cost * (1 + margin)
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Projects table (Workspaces)
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  client_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  expert_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'proposal', -- 'proposal', 'active', 'completed', 'disputed'
  escrow_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Milestones table for Escrow
CREATE TABLE IF NOT EXISTS public.milestones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  amount NUMERIC(12,2) NOT NULL DEFAULT 0.00,
  proof_of_work_url TEXT,
  approval_state TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'submitted', 'approved', 'disputed'
  release_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Project messaging channel
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Disputes workspace
CREATE TABLE IF NOT EXISTS public.disputes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  milestone_id UUID REFERENCES public.milestones(id) ON DELETE SET NULL,
  reporter_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  reason TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open', -- 'open', 'resolved', 'dismissed'
  resolver_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  resolution_summary TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Project whiteboard state
CREATE TABLE IF NOT EXISTS public.whiteboard_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE UNIQUE,
  canvas_state JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Immutable audit logs
CREATE TABLE IF NOT EXISTS public.audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  details JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. AUTOMATIC TRIGGERS
-- Profile creation trigger on Auth signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url, role)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url',
    COALESCE((new.raw_user_meta_data->>'role')::public.user_role, 'guest'::public.user_role)
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Audit log helper trigger for changes
CREATE OR REPLACE FUNCTION public.log_audit_action()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.audit_logs (user_id, action, details)
  VALUES (
    auth.uid(),
    TG_OP,
    jsonb_build_object('table', TG_TABLE_NAME, 'old', row_to_json(OLD), 'new', row_to_json(NEW))
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.milestones ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.disputes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.whiteboard_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
CREATE POLICY "Public profile access" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Services Policies
CREATE POLICY "Services are readable by everyone" ON public.services
  FOR SELECT USING (true);

CREATE POLICY "Only admins/founder can modify services" ON public.services
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('founder', 'admin', 'super_admin')
    )
  );

-- Projects Workspace Policies
CREATE POLICY "Users can view projects they are members of" ON public.projects
  FOR SELECT USING (
    auth.uid() = client_id OR 
    auth.uid() = expert_id OR
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('founder', 'admin', 'super_admin', 'moderator')
    )
  );

CREATE POLICY "Only active managers/founder can modify project details" ON public.projects
  FOR ALL USING (
    auth.uid() = client_id OR 
    auth.uid() = expert_id OR
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('founder', 'admin', 'super_admin')
    )
  );

-- Milestones Policies (Escrow / Proof of work)
CREATE POLICY "Milestone access for project members" ON public.milestones
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.projects 
      WHERE id = milestones.project_id AND (client_id = auth.uid() OR expert_id = auth.uid())
    ) OR EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('founder', 'admin', 'super_admin', 'moderator')
    )
  );

CREATE POLICY "Milestone modification for project members" ON public.milestones
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.projects 
      WHERE id = milestones.project_id AND (client_id = auth.uid() OR expert_id = auth.uid())
    ) OR EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('founder', 'admin', 'super_admin')
    )
  );

-- Messages Policies
CREATE POLICY "Project members can read messages" ON public.messages
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.projects 
      WHERE id = messages.project_id AND (client_id = auth.uid() OR expert_id = auth.uid())
    ) OR EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('founder', 'admin', 'super_admin')
    )
  );

CREATE POLICY "Project members can send messages" ON public.messages
  FOR INSERT WITH CHECK (
    sender_id = auth.uid() AND
    EXISTS (
      SELECT 1 FROM public.projects 
      WHERE id = messages.project_id AND (client_id = auth.uid() OR expert_id = auth.uid())
    )
  );

-- Whiteboard Policies
CREATE POLICY "Project members can read/write whiteboard sessions" ON public.whiteboard_sessions
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.projects 
      WHERE id = whiteboard_sessions.project_id AND (client_id = auth.uid() OR expert_id = auth.uid())
    ) OR EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('founder', 'admin', 'super_admin')
    )
  );

-- Disputes Policies
CREATE POLICY "Dispute access for involved parties or moderators" ON public.disputes
  FOR SELECT USING (
    auth.uid() = reporter_id OR
    EXISTS (
      SELECT 1 FROM public.projects 
      WHERE id = disputes.project_id AND (client_id = auth.uid() OR expert_id = auth.uid())
    ) OR EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('founder', 'admin', 'super_admin', 'moderator')
    )
  );

CREATE POLICY "Create disputes for project members" ON public.disputes
  FOR INSERT WITH CHECK (
    auth.uid() = reporter_id AND
    EXISTS (
      SELECT 1 FROM public.projects 
      WHERE id = disputes.project_id AND (client_id = auth.uid() OR expert_id = auth.uid())
    )
  );

CREATE POLICY "Resolve disputes for moderators/admins" ON public.disputes
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('founder', 'admin', 'super_admin', 'moderator')
    )
  );

-- Audit logs Policies
CREATE POLICY "Only internal admins/founder can read audit logs" ON public.audit_logs
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('founder', 'admin', 'super_admin')
    )
  );
