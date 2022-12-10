import { doc, onSnapshot } from 'firebase/firestore';
import { useState, useContext, useEffect } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { db } from '../../firebase';
import Message from '../Message';
import StyledMessages from './Messages.Styled';

function Messages() {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const unSub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
      // eslint-disable-next-line no-unused-expressions
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <>
      <StyledMessages>
        {messages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
      </StyledMessages>
    </>
  );
}

export default Messages;
