import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Hello from '../../components/Hello';
import Navbar from '../../components/Navbar';

function Main() {
  return (
    <main>
      <Hello hello="About Us Component" />
    </main>
  );
}

function AboutPage() {
  return (
    <>
      <Navbar />
      <Container>
        <Main />
      </Container>
      <Footer />
    </>
  );
}

export default AboutPage;
