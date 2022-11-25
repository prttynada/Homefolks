import love from '../../assets/images/love.png';
import { Container } from '../Hero/Hero.Styled';
import StyledSummary from './Summary.Styled';

function Summary() {
  return (
    <Container>
      <StyledSummary>
        <div className="summary__left">
          <img src={love} alt="giving love illustration" />
        </div>
        <div className="summary__right">
          <h2>Provide The Best Service For You</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales
            efficitur dui sed commodo. Morbi ut sagittis mi. Nullam nisl nunc,
            mollis ut arcu in, tristique condimentum quam. Aenean at iaculis
            nisi. Maecenas interdum, mauris et tristique gravida, turpis sapien
            egestas dolor, sit amet suscipit libero lacus at tellus. Donec non
            sapien non lacus dignissim blandit. Suspendisse faucibus a sem in
            maximus. Nunc porta purus sit amet consectetur condimentum.
          </p>
        </div>
      </StyledSummary>
    </Container>
  );
}

export default Summary;
