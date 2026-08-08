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

  // Basic Sync Queue Logic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async pushPendingMutations(supabase: any) {
    const pendingMessages = await this.messages.where('syncStatus').equals('pending').toArray();
    
    for (const msg of pendingMessages) {
      try {
        const { error } = await supabase.from('messages').insert({
          id: msg.id,
          project_id: msg.project_id,
          sender_id: msg.sender_id,
          content: msg.content,
          created_at: msg.created_at
        });
        
        if (!error) {
          await this.messages.update(msg.id, { syncStatus: 'synced' });
        }
      } catch (err) {
        console.error("Failed to sync message", err);
      }
    }
  }

  // Subscribe to Realtime Updates
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subscribeToWorkspace(supabase: any, projectId: string) {
    const channel = supabase.channel(`workspace_${projectId}`);

    channel
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: `project_id=eq.${projectId}` }, 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async (payload: any) => {
        const incoming = payload.new;
        // Upsert to local cache
        await this.messages.put({
          ...incoming,
          syncStatus: 'synced'
        });
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'projects', filter: `id=eq.${projectId}` }, 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async (payload: any) => {
        if (payload.new) {
          await this.projects.put(payload.new as LocalProject);
        }
      })
      .subscribe();

    return channel;
  }
}

export const localCache = new ImamLocalCache();
