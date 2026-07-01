import React from 'react'
import ChatMessage from './ChatMessage'
import './MessageList.css'

const MessageList = ({ messages }) => {
  return (
    <section className="chat-messages" aria-live="polite">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </section>
  )
}

export default MessageList
