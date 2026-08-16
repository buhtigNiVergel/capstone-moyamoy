import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages  from './components/ChatMessages'
import DefaultMessage from './components/DefaultMessage'
import './App.css'



function App() {
  const [chatMessages, setChatMessages] = useState([]);
  return(
    <div className = "app-container">
      {chatMessages.length === 0 ? 
        <DefaultMessage /> : 
        <ChatMessages 
        chatMessages = {chatMessages}
      />}
      <ChatInput 
        chatMessages = {chatMessages}
        setChatMessages = {setChatMessages}
      />
    </div>
  )
}

export default App
