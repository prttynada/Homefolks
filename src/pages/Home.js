import Container from '../components/Container';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Steps from '../components/Steps';
import Summary from '../components/Summary';

function Main() {
  return (
    <main>
      <Hero />
      <Steps />
      <Summary />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar name="Login" />
      <Container>
        <Main />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
