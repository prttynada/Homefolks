import Container from '../components/Container';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';
import Navbar from '../components/Navbar';

function Main() {
  return (
    <main>
      <NotFound />
    </main>
  );
}

function ForgetPassPage() {
  return (
    <>
      <Navbar name="Sign Up" />
      <Container>
        <Main />
      </Container>
      <Footer />
    </>
  );
}

export default ForgetPassPage;
