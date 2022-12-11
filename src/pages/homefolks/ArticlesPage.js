import Articles from '../../components/Articles';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

function Main() {
  return (
    <main>
      <Articles />
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
