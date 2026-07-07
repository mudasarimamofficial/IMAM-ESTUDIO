import Dexie, { type Table } from 'dexie';

export interface LocalMessage {
  id: string; // uuid
  project_id: string;
  sender_id: string;
  content: string;
  created_at: string;
  syncStatus: 'synced' | 'pending';
}

export interface LocalProject {
  id: string;
  name: string;
  description: string | null;
  client_id: string | null;
  expert_id: string | null;
  status: string;
  updated_at: string;
}

export interface LocalMilestone {
  id: string;
  project_id: string;
  title: string;
  amount: number;
  approval_state: string;
  updated_at: string;
}

class ImamLocalCache extends Dexie {
  messages!: Table<LocalMessage, string>;
  projects!: Table<LocalProject, string>;
  milestones!: Table<LocalMilestone, string>;

  constructor() {
    super('ImamLocalCache');
    this.version(1).stores({
      messages: 'id, project_id, sender_id, syncStatus',
      projects: 'id, client_id, expert_id, status',
      milestones: 'id, project_id, approval_state',
    });
  }
}

export const localCache = new ImamLocalCache();
