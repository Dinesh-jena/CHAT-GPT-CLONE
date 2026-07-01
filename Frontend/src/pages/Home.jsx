import React, { useState } from 'react'
import ChatHeader from '../components/chat/ChatHeader'
import ChatSidebar from '../components/chat/ChatSidebar'
import Composer from '../components/chat/Composer'
import MessageList from '../components/chat/MessageList'

const createSeedChats = () => [
  {
    id: 'welcome',
    title: 'Welcome chat',
    messages: [
      {
        id: 1,
        role: 'assistant',
        content: 'Hey, DINESH. Ready to dive in?',
      },
    ],
  },
  {
    id: 'planning',
    title: 'Project planning',
    messages: [
      {
        id: 2,
        role: 'assistant',
        content: 'I can help you shape ideas, break them into steps, or draft a clean plan.',
      },
    ],
  },
  {
    id: 'design',
    title: 'UI inspiration',
    messages: [
      {
        id: 3,
        role: 'assistant',
        content: 'I can also help with UI copy, flow ideas, and polished conversation prompts.',
      },
    ],
  },
]

const getAssistantReply = (message) => {
  const normalized = message.toLowerCase()

  if (normalized.includes('hello') || normalized.includes('hi')) {
    return 'Hello! I’m Aurora. What would you like to build or explore today?'
  }

  if (normalized.includes('react') || normalized.includes('vite')) {
    return 'React and Vite make a strong combo for fast UI development. I can help with components, state, or routing.'
  }

  if (normalized.includes('idea') || normalized.includes('brainstorm')) {
    return 'Absolutely — I can turn a rough idea into a clear plan, a prompt, or a feature outline.'
  }

  return 'That sounds interesting. I can help you refine the idea, break it into steps, or turn it into something actionable.'
}

const Home = () => {
  const [previousChats, setPreviousChats] = useState(createSeedChats())
  const [activeChatId, setActiveChatId] = useState('welcome')
  const [messages, setMessages] = useState(createSeedChats()[0].messages)
  const [input, setInput] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const activeChat = previousChats.find((chat) => chat.id === activeChatId) || previousChats[0]

  const createNewChat = () => {
    const newChat = {
      id: Date.now().toString(),
      title: 'New chat',
      messages: [
        {
          id: Date.now(),
          role: 'assistant',
          content: 'Started a fresh conversation. What would you like to explore?',
        },
      ],
    }

    setPreviousChats((prev) => [newChat, ...prev])
    setActiveChatId(newChat.id)
    setMessages(newChat.messages)
    setSidebarOpen(false)
  }

  const handleSelectChat = (chat) => {
    setActiveChatId(chat.id)
    setMessages(chat.messages)
    setSidebarOpen(false)
  }

  const handleSendMessage = (event) => {
    event.preventDefault()

    const trimmed = input.trim()
    if (!trimmed) return

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: trimmed,
    }

    const assistantMessage = {
      id: Date.now() + 1,
      role: 'assistant',
      content: getAssistantReply(trimmed),
    }

    const nextMessages = [...messages, userMessage, assistantMessage]

    setMessages(nextMessages)
    setInput('')

    setPreviousChats((prev) =>
      prev.map((chat) =>
        chat.id === activeChatId
          ? {
              ...chat,
              title: chat.title === 'New chat' ? trimmed.slice(0, 28) : chat.title,
              messages: nextMessages,
            }
          : chat,
      ),
    )
  }

  return (
    <div className="home-shell">
      <ChatSidebar
        chats={previousChats}
        activeChatId={activeChatId}
        onSelectChat={handleSelectChat}
        onNewChat={createNewChat}
        sidebarOpen={sidebarOpen}
      />

      <main className="home-main">
        <ChatHeader
          title={activeChat?.title || 'New chat'}
          onToggleHistory={() => setSidebarOpen((prev) => !prev)}
        />

        <MessageList messages={messages} />

        <Composer
          input={input}
          onInputChange={(event) => setInput(event.target.value)}
          onSubmit={handleSendMessage}
        />
      </main>
    </div>
  )
}

export default Home
