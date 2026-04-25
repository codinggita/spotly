import React, { useState } from 'react';
import { 
  Search, MoreVertical, Send, Paperclip, 
  Smile, Phone, Video, Info, Check, 
  CheckCheck, User, ShieldCheck
} from 'lucide-react';
import { DashboardNavbar } from '../components/dashboard/DashboardComponents';
import Footer from '../components/layout/Footer';

const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState('');

  const chats = [
    {
      id: 1,
      name: 'Spotly Support',
      lastMessage: 'Your issue with the slot B-12 has been resolved.',
      time: '10:30 AM',
      unread: 1,
      isSupport: true,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
      online: true
    },
    {
      id: 2,
      name: 'Marcus (Urban Flow Lot)',
      lastMessage: 'Is the gate open now?',
      time: 'Yesterday',
      unread: 0,
      isSupport: false,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
      online: false
    },
    {
      id: 3,
      name: 'Sarah (East Riverside)',
      lastMessage: 'Thanks for the quick response!',
      time: 'Oct 23',
      unread: 0,
      isSupport: false,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      online: true
    }
  ];

  const messages = [
    { id: 1, text: 'Hello! How can I help you with your booking at Plaza Central?', sender: 'them', time: '10:00 AM' },
    { id: 2, text: 'I am having trouble accessing the parking gate. The code is not working.', sender: 'me', time: '10:05 AM', status: 'read' },
    { id: 3, text: 'Let me check that for you right away.', sender: 'them', time: '10:06 AM' },
    { id: 4, text: 'The issue with the slot B-12 has been resolved. You can now use the code 4455.', sender: 'them', time: '10:30 AM' }
  ];

  const activeChat = chats.find(c => c.id === selectedChat);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <DashboardNavbar />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
        <div className="bg-white rounded-[3rem] border border-gray-100 shadow-2xl shadow-blue-500/5 flex h-[750px] overflow-hidden">
          
          {/* Chat Sidebar */}
          <div className="w-[380px] border-r border-gray-50 flex flex-col">
            <div className="p-8 pb-4">
              <h1 className="text-4xl font-black text-[#1E293B] mb-6 tracking-tight">Messages</h1>
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#0047FF] transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search conversations..."
                  className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pb-8 space-y-2 custom-scrollbar">
              {chats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.id)}
                  className={`w-full p-5 rounded-[2rem] transition-all flex gap-4 group relative ${
                    selectedChat === chat.id ? 'bg-[#1E293B] text-white shadow-xl shadow-gray-200' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="relative shrink-0">
                    <img src={chat.avatar} alt="" className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-sm" />
                    {chat.online && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>
                  
                  <div className="flex-1 text-left min-w-0 py-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className={`font-black truncate ${selectedChat === chat.id ? 'text-white' : 'text-[#1E293B]'}`}>
                        {chat.name}
                      </h4>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${selectedChat === chat.id ? 'text-blue-300' : 'text-gray-300'}`}>
                        {chat.time}
                      </span>
                    </div>
                    <p className={`text-sm truncate ${selectedChat === chat.id ? 'text-gray-400' : 'text-gray-500 font-bold'}`}>
                      {chat.lastMessage}
                    </p>
                  </div>

                  {chat.unread > 0 && selectedChat !== chat.id && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#0047FF] rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-lg shadow-blue-500/20">
                      {chat.unread}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active Chat Area */}
          <div className="flex-1 flex flex-col bg-white relative">
            <div className="absolute inset-0 bg-blue-50/10 pointer-events-none" />
            
            {/* Chat Header */}
            <div className="px-10 py-6 border-b border-gray-50 flex items-center justify-between relative z-10 bg-white/80 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src={activeChat.avatar} alt="" className="w-14 h-14 rounded-2xl object-cover shadow-sm border-2 border-white" />
                  {activeChat.online && <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-[#1E293B]">{activeChat.name}</h3>
                    {activeChat.isSupport && <ShieldCheck className="w-4 h-4 text-[#0047FF]" />}
                  </div>
                  <p className="text-[10px] font-black text-green-500 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    {activeChat.online ? 'Online now' : 'Offline'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-3.5 text-gray-400 hover:text-[#0047FF] hover:bg-blue-50 rounded-2xl transition-all border border-transparent hover:border-blue-100"><Phone className="w-5 h-5" /></button>
                <button className="p-3.5 text-gray-400 hover:text-[#0047FF] hover:bg-blue-50 rounded-2xl transition-all border border-transparent hover:border-blue-100"><Video className="w-5 h-5" /></button>
                <button className="p-3.5 text-gray-400 hover:text-[#0047FF] hover:bg-blue-50 rounded-2xl transition-all border border-transparent hover:border-blue-100"><Info className="w-5 h-5" /></button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-10 space-y-8 relative z-10 custom-scrollbar">
              <div className="text-center mb-10">
                <span className="text-[10px] font-black text-gray-400 bg-gray-100/50 backdrop-blur-sm px-6 py-2 rounded-full uppercase tracking-widest shadow-sm border border-white/50">
                  Today, Oct 25
                </span>
              </div>

              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[75%] group ${m.sender === 'me' ? 'items-end' : 'items-start'} flex flex-col`}>
                    <div className={`p-5 rounded-[2rem] text-sm font-bold shadow-sm relative ${
                      m.sender === 'me' 
                        ? 'bg-[#0047FF] text-white rounded-tr-none shadow-blue-500/10' 
                        : 'bg-white text-[#1E293B] rounded-tl-none border border-gray-100'
                    }`}>
                      {m.text}
                    </div>
                    <div className="flex items-center gap-2 mt-2.5 px-2">
                      <span className="text-[9px] font-black text-gray-300 uppercase tracking-tighter">{m.time}</span>
                      {m.sender === 'me' && (
                        m.status === 'read' ? <CheckCheck className="w-3.5 h-3.5 text-blue-500" /> : <Check className="w-3.5 h-3.5 text-gray-300" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-10 pt-0 relative z-10">
              <div className="bg-gray-50/80 backdrop-blur-md rounded-[2.5rem] p-3 flex items-center gap-2 border border-gray-100 focus-within:border-blue-200 focus-within:bg-white transition-all shadow-inner">
                <button className="p-3.5 text-gray-400 hover:text-[#0047FF] transition-all"><Smile className="w-6 h-6" /></button>
                <button className="p-3.5 text-gray-400 hover:text-[#0047FF] transition-all"><Paperclip className="w-6 h-6" /></button>
                <input 
                  type="text" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-bold text-[#1E293B] placeholder:text-gray-300"
                />
                <button className="bg-[#0047FF] text-white p-4 rounded-[1.5rem] shadow-xl shadow-blue-500/20 hover:scale-105 hover:bg-blue-600 active:scale-95 transition-all flex items-center justify-center">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-center mt-8 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">
          End-to-End Encrypted • Spotly Secure Messaging
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default MessagesPage;
