-- Enterprise Control Plane Migration for Imam Estudio
-- Creates schema tables for Theme Settings, Services, Case Studies, Products, Orders, Customers, Media, Webhooks, and RBAC

CREATE TABLE IF NOT EXISTS public.control_plane_settings (
  id TEXT PRIMARY KEY DEFAULT 'default',
  settings JSONB NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.services_catalog (
  id TEXT PRIMARY KEY,
  gig_id TEXT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  starting_price TEXT NOT NULL,
  pricing_model TEXT,
  estimated_duration TEXT,
  tags TEXT[],
  features TEXT[],
  is_published BOOLEAN DEFAULT true,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.projects_catalog (
  id TEXT PRIMARY KEY,
  gig_id TEXT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  client TEXT,
  metrics TEXT,
  tags TEXT[],
  is_featured BOOLEAN DEFAULT true,
  is_published BOOLEAN DEFAULT true,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.customers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  company TEXT,
  tags TEXT[],
  total_spent NUMERIC DEFAULT 0,
  orders_count INT DEFAULT 0,
  status TEXT DEFAULT 'Active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.orders (
  id TEXT PRIMARY KEY,
  order_number TEXT UNIQUE NOT NULL,
  customer_id TEXT REFERENCES public.customers(id),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  total NUMERIC NOT NULL,
  payment_status TEXT DEFAULT 'Paid',
  fulfillment_status TEXT DEFAULT 'Unfulfilled',
  items JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.media_assets (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  size TEXT,
  dimensions TEXT,
  alt_text TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.audit_logs (
  id TEXT PRIMARY KEY,
  user_email TEXT NOT NULL,
  action TEXT NOT NULL,
  entity TEXT NOT NULL,
  details JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.control_plane_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services_catalog ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects_catalog ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Allow Public Read Access for website display
CREATE POLICY "Public Read Settings" ON public.control_plane_settings FOR SELECT USING (true);
CREATE POLICY "Public Read Services" ON public.services_catalog FOR SELECT USING (true);
CREATE POLICY "Public Read Projects" ON public.projects_catalog FOR SELECT USING (true);
CREATE POLICY "Public Read Media" ON public.media_assets FOR SELECT USING (true);
