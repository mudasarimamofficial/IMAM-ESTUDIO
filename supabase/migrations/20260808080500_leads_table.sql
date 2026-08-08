-- Supabase migration: Leads table for Imam Estudio
CREATE TABLE IF NOT EXISTS public.leads (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  project_type TEXT NOT NULL,
  budget TEXT,
  details TEXT NOT NULL,
  source_cta TEXT NOT NULL DEFAULT 'Direct Contact Form',
  status TEXT NOT NULL DEFAULT 'New',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow public insert access for lead generation
CREATE POLICY "Allow public lead creation" ON public.leads
  FOR INSERT WITH CHECK (true);

-- Allow authenticated/admin read access
CREATE POLICY "Allow admin read leads" ON public.leads
  FOR SELECT USING (true);

-- Allow admin update leads
CREATE POLICY "Allow admin update leads" ON public.leads
  FOR UPDATE USING (true);
