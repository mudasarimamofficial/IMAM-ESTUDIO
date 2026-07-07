import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yqaslfozryelumtlkoxk.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

if (!supabaseUrl) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL env variable');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Profile {
  id: string;
  role: 'guest' | 'buyer' | 'client' | 'freelancer' | 'verified_expert' | 'senior_expert' | 'founder' | 'admin' | 'super_admin' | 'moderator' | 'applicant' | 'member' | 'editor';
  full_name: string | null;
  avatar_url: string | null;
  organization_id: string | null;
  stripe_connect_id: string | null;
  rating: number;
  vetted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  name: string;
  description: string | null;
  client_id: string | null;
  expert_id: string | null;
  status: 'proposal' | 'active' | 'completed' | 'disputed';
  escrow_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface Milestone {
  id: string;
  project_id: string;
  title: string;
  amount: number;
  proof_of_work_url: string | null;
  approval_state: 'pending' | 'submitted' | 'approved' | 'disputed';
  release_date: string | null;
  created_at: string;
  updated_at: string;
}

export interface Message {
  id: string;
  project_id: string;
  sender_id: string | null;
  content: string;
  created_at: string;
}

export interface Dispute {
  id: string;
  project_id: string;
  milestone_id: string | null;
  reporter_id: string | null;
  reason: string;
  status: 'open' | 'resolved' | 'dismissed';
  resolver_id: string | null;
  resolution_summary: string | null;
  created_at: string;
}
