import { Button } from '@chakra-ui/react';
import { FiFileText, FiImage, FiSend } from 'react-icons/fi';
import StyledChatInput from './ChatInput.Styled';

function ChatInput() {
  return (
    <>
      <StyledChatInput>
        <input type="text" placeholder="Mulai chatting..." />
        <div className="send">
          <FiFileText className="icon" />
          <input type="file" style={{ display: 'none' }} id="file" />
          <label htmlFor="file">
            <FiImage className="icon" />
          </label>
          <Button size="sm" variant="ghost">
            <FiSend />
          </Button>
        </div>
      </StyledChatInput>
    </>
  );
}

export default ChatInput;
