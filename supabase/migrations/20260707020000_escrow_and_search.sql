-- Enable pgvector extension for semantic search
CREATE EXTENSION IF NOT EXISTS vector;

-- Add embedding vector to profiles table
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS search_embedding vector(1536);

-- Escrow accounts tracking table
CREATE TABLE IF NOT EXISTS public.escrow_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  stripe_account_id TEXT NOT NULL,
  total_held NUMERIC(12,2) NOT NULL DEFAULT 0.00,
  currency TEXT NOT NULL DEFAULT 'usd',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Escrow transaction logs
CREATE TABLE IF NOT EXISTS public.escrow_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  escrow_id UUID REFERENCES public.escrow_accounts(id) ON DELETE CASCADE,
  milestone_id UUID REFERENCES public.milestones(id) ON DELETE SET NULL,
  amount NUMERIC(12,2) NOT NULL,
  type TEXT NOT NULL, -- 'deposit', 'release', 'refund'
  stripe_transfer_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Escrow RLS
ALTER TABLE public.escrow_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.escrow_transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Escrow accounts access for project members" ON public.escrow_accounts
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.projects 
      WHERE id = escrow_accounts.project_id AND (client_id = auth.uid() OR expert_id = auth.uid())
    ) OR EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('founder', 'admin', 'super_admin', 'moderator', 'finance')
    )
  );

CREATE POLICY "Escrow transactions access for project members" ON public.escrow_transactions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.escrow_accounts 
      WHERE id = escrow_transactions.escrow_id AND EXISTS (
          SELECT 1 FROM public.projects 
          WHERE id = escrow_accounts.project_id AND (client_id = auth.uid() OR expert_id = auth.uid())
      )
    ) OR EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('founder', 'admin', 'super_admin', 'moderator', 'finance')
    )
  );
