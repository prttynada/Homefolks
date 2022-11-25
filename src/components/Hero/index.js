import family from '../../assets/images/family.png';
import Button from '../ui/Button';
import StyledHero, { Container } from './Hero.Styled';

function Hero() {
  return (
    <Container>
      <StyledHero>
        <div className="hero__left">
          <h2>
            Assisting Your
            <span> Family Issues </span>
            With Our Best Services
          </h2>
          <p>
            Konsultasikan Masalah Keluarga Yang Dihadapi Bersama Para Ahli
            HomeFolks
          </p>
          <Button as="a" href="" variant="primary" size="lg">
            Konsultasi Sekarang
          </Button>
        </div>
        <div className="hero__right">
          <img src={family} alt="family illustration" />
        </div>
      </StyledHero>
    </Container>
  );
}

export default Hero;
