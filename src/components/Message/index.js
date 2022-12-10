import StyledMessage from './Message.Styled';

function Message() {
  return (
    <>
      <StyledMessage>
        <div className="message owner">
          <div className="messageInfo">
            <img
              src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              alt=""
            />
            <span>just now</span>
          </div>
          <div className="messageContent">
            <p>Hellooo</p>
            <img
              src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              alt=""
            />
          </div>
        </div>
      </StyledMessage>
    </>
  );
}

export default Message;
