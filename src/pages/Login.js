import Container from '../components/Container';
import Footer from '../components/Footer';
import Login from '../components/Login';
import Navbar from '../components/Navbar';

function Main() {
  return (
    <main>
      <Login />
    </main>
  );
}

function LoginPage() {
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

export default LoginPage;
