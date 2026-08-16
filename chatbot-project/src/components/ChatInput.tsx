import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

type ChatMessages = {
  message: string;
  sender: string;
  id: string;
}[];


type ChatInputProps = {
  chatMessages: ChatMessages;
  setChatMessages: (chatMessages: ChatMessages) => void;
};

export function ChatInput({ chatMessages, setChatMessages }: ChatInputProps) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

function saveInputText(event: {
  target: {
    value: string;
  };
}) {
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
        message:  '',
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

  

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      sendMessage();
    } else if (event.key === 'Escape') {
      setInputText('');
    }
  }

  return(
    <div className = "chat-input-container">
      <input 
        type="text" 
        size = {30}
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