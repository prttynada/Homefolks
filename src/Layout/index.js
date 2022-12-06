import Container from '../components/Container';

function Layout({ children }) {
  return (
    <>
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}

export default Layout;
