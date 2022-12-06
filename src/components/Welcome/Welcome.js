import { Grid, GridItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import sunflower from '../../assets/images/sunflower.png';
import consult from '../../assets/images/consult.png';
import woman from '../../assets/images/woman.png';
import StyledWelcome, { Container } from './Welcome.Styled';

function Welcome({ user = 'User' }) {
  return (
    <Container>
      <StyledWelcome>
        <div className="hero__left">
          <h2>Welcome back {user}!</h2>
          <Grid templateColumns="repeat(2, 1fr)">
            <Link to="/homefolks/consultation">
              <GridItem pl="2">
                <div className="card">
                  <h3 className="step__third">Konsultasi</h3>
                  <img src={consult} alt="consult illustration" />
                </div>
              </GridItem>
            </Link>
            <Link to="/homefolks/mood">
              <GridItem pl="2">
                <div className="card">
                  <h3 className="step__third">Mood</h3>
                  <img src={woman} alt="woman illustration" />
                </div>
              </GridItem>
            </Link>
          </Grid>
        </div>
        <div className="hero__right">
          <img src={sunflower} alt="sunflower illustration" />
        </div>
      </StyledWelcome>
    </Container>
  );
}

export default Welcome;
