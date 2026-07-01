import React from 'react'
import './ChatSidebar.css'

const ChatSidebar = ({ chats, activeChatId, onSelectChat, onNewChat, sidebarOpen }) => {
  return (
    <aside className={`home-sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div>
          <p className="eyebrow">Workspace</p>
          <h2>Aurora chat</h2>
        </div>
        <button type="button" className="ghost-btn" onClick={onNewChat}>
          + New
        </button>
      </div>

      <div className="chat-list">
        {chats.map((chat) => (
          <button
            key={chat.id}
            type="button"
            className={`chat-item ${chat.id === activeChatId ? 'active' : ''}`}
            onClick={() => onSelectChat(chat)}
          >
            <span className="chat-title">{chat.title}</span>
            <span className="chat-meta">Tap to open</span>
          </button>
        ))}
      </div>
    </aside>
  )
}

export default ChatSidebar
