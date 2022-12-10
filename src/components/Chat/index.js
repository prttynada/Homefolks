import { useContext } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { ChatContext } from '../../context/ChatContext';
import ChatInput from '../ChatInput';
import Messages from '../Messages';
import StyledChat from './Chat.Styled';

function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <>
      <StyledChat>
        <div className="chatInfo">
          <span>{data.user?.displayName}</span>
          <div className="chatIcons">
            <FiMoreHorizontal />
          </div>
        </div>
        <Messages />
        <ChatInput />
      </StyledChat>
    </>
  );
}

export default Chat;
