import React from 'react'
import './ChatMessage.css'

const ChatMessage = ({ message }) => {
  return (
    <div className={`message-row ${message.role === 'user' ? 'user' : 'assistant'}`}>
      <div className={`message-bubble ${message.role}`}>{message.content}</div>
    </div>
  )
}

export default ChatMessage
