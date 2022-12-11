import Container from '../components/Container';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout({ children, name }) {
  return (
    <>
      <main>
        <Navbar name={name} />
        <Container>{children}</Container>
        <Footer />
      </main>
    </>
  );
}

export default Layout;
