import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import LoadingGIF from '../assets/loading-spinner.gif'
import './ChatInput.css'

export function ChatInput( {chatMessages, setChatMessages} ){
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage(){
      if (isLoading || inputText === '') {
        return;
      }

      setIsLoading(true);

    setInputText('');
    const newChatMessage = [
      ...chatMessages, {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ]
    
    setChatMessages([
      ...newChatMessage,{
        message:  <img src={LoadingGIF} className="loading-img" />,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ])

    const response = await Chatbot.getResponseAsync(inputText);
    
    setChatMessages([
      ...newChatMessage, {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);
    setIsLoading(false);
  }

  

  function handleKeyDown(event) {
    event.key === 'Enter' ? sendMessage() : 
    event.key ==='Escape' ? setInputText('') :
                  null
  }

  return(
    <div className = "chat-input-container">
      <input 
        type="text" 
        size = "30" 
        placeholder = "Send a message to Chatbot"
        onChange = {saveInputText}
        onKeyDown = {handleKeyDown}
        value = {inputText}
        className = "chat-input"
      />
      <button onClick = {sendMessage}
              className = "send-button">Send</button>
    </div>
  )
}