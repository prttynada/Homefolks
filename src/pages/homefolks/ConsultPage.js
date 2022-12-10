import Consultation from '../../components/Consultation';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

function Main() {
  return (
    <main>
      <Consultation />
    </main>
  );
}

function ConsultPage() {
  return (
    <>
      <Navbar name="Logout" />
      <Container>
        <Main />
      </Container>
      <Footer />
    </>
  );
}

export default ConsultPage;
