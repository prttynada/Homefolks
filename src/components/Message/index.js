import { useContext, useRef, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';
import StyledMessage from './Message.Styled';

function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message]);

  console.log(message);

  return (
    <>
      <StyledMessage ref={ref}>
        <div
          className={`message ${
            message.senderId === currentUser.uid && 'owner'
          }`}
        >
          <div className="messageInfo">
            <img
              src={
                message.senderId === currentUser.uid
                  ? currentUser.photoURL
                  : data.user.photoURL
              }
              alt=""
            />
            <span>just now</span>
          </div>
          <div className="messageContent">
            <p>{message.text}</p>
            {message.img && (
              <img src={message.img} alt="message in file type" />
            )}
          </div>
        </div>
      </StyledMessage>
    </>
  );
}

export default Message;
