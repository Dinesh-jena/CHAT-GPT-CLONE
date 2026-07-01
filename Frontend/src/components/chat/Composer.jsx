import React from 'react'
import './Composer.css'

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const MicIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1v11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8a4 4 0 008 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 12v1a6 6 0 01-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 21h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Use a clearer paper-plane send icon
const PlaneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="currentColor"/>
  </svg>
)

const Composer = ({ input, onInputChange, onSubmit }) => {
  return (
    <form className="composer" onSubmit={onSubmit} aria-label="Send message">
      <button type="button" className="composer-left" aria-hidden>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#1f1f1f" stroke="#ffffff" strokeWidth="1" />
          <path d="M12 8v8M8 12h8" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <input
        type="text"
        value={input}
        onChange={onInputChange}
        placeholder="Ask Aurora anything..."
        className="composer-input"
      />

      <div className="composer-right">
        <button type="button" className="composer-icon mic" aria-label="Voice">
          <MicIcon />
        </button>
        <button type="submit" className="composer-send" aria-label="Send">Send</button>
      </div>
    </form>
  )
}

export default Composer
