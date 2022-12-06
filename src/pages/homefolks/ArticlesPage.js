import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Hello from '../../components/Hello';
import Navbar from '../../components/Navbar';

function Main() {
  return (
    <main>
      <Hello hello="Articles Component" />
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
