import Container from '../components/Container';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SignUp from '../components/SignUp';

function Main() {
  return (
    <main>
      <SignUp />
    </main>
  );
}

function SignupPage() {
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

export default SignupPage;
