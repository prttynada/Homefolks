import Container from '../../components/Container';
import DetailArticle from '../../components/DetailArticle';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

function Main() {
  return (
    <main>
      <DetailArticle />
    </main>
  );
}

function ArticleDetail() {
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

export default ArticleDetail;
