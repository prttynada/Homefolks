import { FiMoreHorizontal } from 'react-icons/fi';
import ChatInput from '../ChatInput';
import Messages from '../Messages';
import StyledChat from './Chat.Styled';

function Chat() {
  return (
    <>
      <StyledChat>
        <div className="chatInfo">
          <span>Nada</span>
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
