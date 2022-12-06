import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Steps from '../../components/Steps';
import Summary from '../../components/Summary';
import Welcome from '../../components/Welcome/Welcome';

function Main() {
  return (
    <main>
      <Welcome />
      <Steps />
      <Summary />
    </main>
  );
}

function ArticlesPage() {
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

export default ArticlesPage;
