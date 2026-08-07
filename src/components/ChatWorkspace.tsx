"use client";

import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function ChatWorkspace() {
  const [messages, setMessages] = useState([
    { id: '1', sender: 'Mudasar Imam', content: '<p>Welcome to the workspace. We will handle all communications here.</p>', time: '10:00 AM' },
    { id: '2', sender: 'Client', content: '<p>Great. When can we expect the first milestone?</p>', time: '10:05 AM' }
  ]);

  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none focus:outline-none min-h-[60px] text-xs font-sans text-white p-3',
      },
    },
  });

  const handleSend = () => {
    if (!editor || editor.isEmpty) return;
    
    const html = editor.getHTML();
    
    // Command parser: Check if message starts with /task
    const text = editor.getText();
    if (text.trim().startsWith('/task')) {
      const taskTitle = text.replace('/task', '').trim();
      alert(`[Command] Created Kanban Task: "${taskTitle}"`);
      // Here you would trigger an event or API to add to Kanban board
    }

    setMessages(prev => [
      ...prev, 
      { id: Date.now().toString(), sender: 'Mudasar Imam', content: html, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }
    ]);
    
    editor.commands.setContent('');
  };

  return (
    <div className="flex flex-col h-full bg-[#0d0e0f] border border-border rounded">
      <div className="flex items-center justify-between p-4 border-b border-[#161616]">
        <h3 className="font-sans text-sm font-bold text-white tracking-tight">Project Communications</h3>
        <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-500/20">
          SECURE CHANNEL
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
        {messages.map((msg) => (
          <div key={msg.id} className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs font-bold text-[#c4c7c8]">{msg.sender}</span>
              <span className="font-mono text-[9px] text-[#8e9192]">{msg.time}</span>
            </div>
            <div 
              className="text-xs text-white prose-p:my-1 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: msg.content }} 
            />
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-[#161616] bg-[#0a0a0a]">
        <div className="border border-border rounded bg-black focus-within:border-white/50 transition-colors">
          <EditorContent editor={editor} />
          
          <div className="flex items-center justify-between p-2 border-t border-[#111]">
            <div className="flex gap-2 text-[#8e9192]">
              <button 
                onClick={() => editor?.chain().focus().toggleBold().run()} 
                className={`p-1 rounded hover:text-white hover:bg-[#1c1c1c] ${editor?.isActive('bold') ? 'text-white bg-[#1c1c1c]' : ''}`}
                title="Bold"
              >
                <span className="material-symbols-outlined text-[16px]">format_bold</span>
              </button>
              <button 
                onClick={() => editor?.chain().focus().toggleItalic().run()}
                className={`p-1 rounded hover:text-white hover:bg-[#1c1c1c] ${editor?.isActive('italic') ? 'text-white bg-[#1c1c1c]' : ''}`}
                title="Italic"
              >
                <span className="material-symbols-outlined text-[16px]">format_italic</span>
              </button>
              <button className="p-1 rounded hover:text-white hover:bg-[#1c1c1c]" title="Attach File">
                <span className="material-symbols-outlined text-[16px]">attach_file</span>
              </button>
            </div>
            
            <button 
              onClick={handleSend}
              className="px-4 py-1.5 bg-white text-black font-mono text-[10px] font-bold uppercase rounded-[2px] hover:bg-opacity-90 transition-all flex items-center gap-1"
            >
              Send <span className="material-symbols-outlined text-[12px]">send</span>
            </button>
          </div>
        </div>
        <div className="mt-2 flex justify-between">
          <span className="font-mono text-[9px] text-[#8e9192]">Type /task [title] to create a Kanban task</span>
        </div>
      </div>
    </div>
  );
}
