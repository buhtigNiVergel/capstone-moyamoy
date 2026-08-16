import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';

type ChatMessageProps = {
  message: string;
  sender: string;
};

export function ChatMessage({ message, sender }: ChatMessageProps) {
  return(
    <div className = {
      sender === 'user' ? 
        'chat-message-user' : 
        'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img src={RobotProfileImage} 
            className = 'chat-message-profile'/>)}
      <div className = "chat-message-text">
        {message}
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage}
            className = 'chat-message-profile'/>)}
    </div>
  )
}