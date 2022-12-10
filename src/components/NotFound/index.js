import StyledNotFound, { Container } from './NotFound.Styled';
import notfound from '../../assets/images/notfound.png';

function NotFound() {
  return (
    <Container>
      <StyledNotFound>
        <div className="hero__left">
          <h2>Maaf, Halaman Tidak Ditemukan :&#40;</h2>
        </div>
        <div className="hero__right">
          <img src={notfound} alt="notfound illustration" />
        </div>
      </StyledNotFound>
    </Container>
  );
}

export default NotFound;
