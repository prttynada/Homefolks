import Chats from '../Chats';
import Search from '../Search';
import StyledChatSideBar from './ChatSideBar.Styled';

function ChatSideBar() {
  return (
    <>
      <StyledChatSideBar>
        <Search />
        <Chats />
      </StyledChatSideBar>
    </>
  );
}

export default ChatSideBar;
