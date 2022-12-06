import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Hello from '../../components/NotFound';

function Main() {
  return (
    <main>
      <Hello />
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
