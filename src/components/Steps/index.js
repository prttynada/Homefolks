import StyledStep from './Step.Styled';
import StyledSteps from './Steps.Styled';
import doctors from '../../assets/images/doctors.png';
import medicine from '../../assets/images/medicine.png';
import support from '../../assets/images/support.png';

function Steps() {
  return (
    <StyledSteps>
      <section>
        <h2>3 Quick Steps</h2>
        <p className="subtitle">Start Your Better Family’s Life</p>
        <div className="steps__container">
          <StyledStep>
            <h3 className="step__first">Get The Right One</h3>
            <img src={doctors} alt="doctors illustration" />
            <p>Choose your doctor from our best doctors</p>
          </StyledStep>
          <StyledStep>
            <h3 className="step__second">Chat With Doctor</h3>
            <img src={medicine} alt="doctors give solutions illustration" />
            <p>They will give you solutions that matters to your problems</p>
          </StyledStep>
          <StyledStep>
            <h3 className="step__third">Welcome Sunshine</h3>
            <img src={support} alt="giving support illustration" />
            <p>Start your daily activity and be more happy</p>
          </StyledStep>
        </div>
      </section>
    </StyledSteps>
  );
}

export default Steps;
