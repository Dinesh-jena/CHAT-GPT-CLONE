import React from 'react'
import './ChatHeader.css'

const ChatHeader = ({ title, onToggleHistory }) => {
  return (
    <header className="chat-header">
      <div>
        <p className="eyebrow">Mobile-first AI chat</p>
        <h1>{title}</h1>
      </div>
      <button type="button" className="ghost-btn mobile-only" onClick={onToggleHistory}>
        History
      </button>
    </header>
  )
}

export default ChatHeader
