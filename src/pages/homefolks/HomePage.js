import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Steps from '../../components/Steps';
import Summary from '../../components/Summary';
import Welcome from '../../components/Welcome';

function Main({ user }) {
  return (
    <main>
      <Welcome user={user} />
      <Steps />
      <Summary />
    </main>
  );
}

function HomePage({ user }) {
  return (
    <>
      <Navbar name="Logout" />
      <Container>
        <Main user={user} />
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;
