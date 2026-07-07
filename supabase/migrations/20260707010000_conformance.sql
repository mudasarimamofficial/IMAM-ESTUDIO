-- IMAM ESTUDIO | Database Conformance Schema
-- Targets Supabase/PostgreSQL for 100% Blueprint Alignment

-- 1. Create Roles Table
CREATE TABLE IF NOT EXISTS public.roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(50) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Insert 13 Blueprint Roles
INSERT INTO public.roles (name) VALUES
  ('guest'), ('buyer'), ('client'), ('freelancer'), ('agency_member'),
  ('verified_expert'), ('senior_expert'), ('founder'), ('moderator'),
  ('support_staff'), ('finance_manager'), ('admin'), ('super_admin')
ON CONFLICT (name) DO NOTHING;

-- 2. Alter Profiles with missing columns
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS role_id UUID REFERENCES public.roles(id) ON DELETE SET NULL;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS headline VARCHAR(255);
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS bio TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS hourly_rate DECIMAL(12, 2);
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS timezone VARCHAR(50);
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_verified BOOLEAN DEFAULT FALSE;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS two_factor_secret VARCHAR(255);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_profiles_is_verified ON public.profiles(is_verified);
CREATE INDEX IF NOT EXISTS idx_profiles_hourly_rate ON public.profiles(hourly_rate);

-- 3. Alter Services table
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE;
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS category_id UUID;
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS title VARCHAR(255);
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS base_price DECIMAL(12, 2);
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS search_vector TSVECTOR;

-- Create GIN index on search vector
CREATE INDEX IF NOT EXISTS idx_services_search_vector ON public.services USING GIN(search_vector);

-- Search vector update trigger
CREATE OR REPLACE FUNCTION public.services_search_vector_trigger()
RETURNS TRIGGER AS $$
BEGIN
  NEW.search_vector := to_tsvector('english', coalesce(NEW.title, '') || ' ' || coalesce(NEW.description, ''));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_services_search_vector
  BEFORE INSERT OR UPDATE ON public.services
  FOR EACH ROW EXECUTE FUNCTION public.services_search_vector_trigger();

-- 4. Alter Projects table
ALTER TABLE public.projects ADD COLUMN IF NOT EXISTS title VARCHAR(255);
ALTER TABLE public.projects ADD COLUMN IF NOT EXISTS total_budget DECIMAL(12, 2);
ALTER TABLE public.projects ADD COLUMN IF NOT EXISTS stripe_escrow_id VARCHAR(255);

CREATE INDEX IF NOT EXISTS idx_projects_status ON public.projects(status);

-- 5. Alter Milestones table
ALTER TABLE public.milestones ADD COLUMN IF NOT EXISTS due_date TIMESTAMPTZ;
ALTER TABLE public.milestones ADD COLUMN IF NOT EXISTS approved_at TIMESTAMPTZ;

-- 6. Alter Messages table
ALTER TABLE public.messages ADD COLUMN IF NOT EXISTS attachments JSONB NOT NULL DEFAULT '[]'::jsonb;
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON public.messages(created_at);

-- 7. Alter Audit Logs table
ALTER TABLE public.audit_logs ADD COLUMN IF NOT EXISTS actor_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL;
ALTER TABLE public.audit_logs ADD COLUMN IF NOT EXISTS target_resource VARCHAR(255);
ALTER TABLE public.audit_logs ADD COLUMN IF NOT EXISTS ip_address INET;
ALTER TABLE public.audit_logs ADD COLUMN IF NOT EXISTS timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW();
