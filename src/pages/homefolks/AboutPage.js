import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import NotFound from '../../components/NotFound';

function Main() {
  return (
    <main>
      <NotFound />
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
