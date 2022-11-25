import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';
import Home from './pages/Home';
import AboutPage from './pages/homefolks/AboutPage';
import ArticlesPage from './pages/homefolks/ArticlesPage';
import LoginPage from './pages/Login';
import theme from './utils/constants/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {/*
         * Render Halaman Home
         * Jika ingin diubah, maka ubah di Halaman Home.
         */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/homefolks/about" element={<AboutPage />}></Route>
          <Route path="/homefolks/articles" element={<ArticlesPage />}></Route>
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
