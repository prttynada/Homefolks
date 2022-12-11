import About from '../../components/About';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

function Main() {
  return (
    <main>
      <About />
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
