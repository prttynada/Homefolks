import Chat from '../Chat';
import ChatSideBar from '../ChatSideBar';
import StyledConsultation from './Consultation.Styled';

function Consultation() {
  return (
    <>
      <StyledConsultation>
        <div className="container">
          <ChatSideBar />
          <Chat />
        </div>
      </StyledConsultation>
    </>
  );
}

export default Consultation;
