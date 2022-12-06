import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';
import Home from './pages/Home';
import AboutPage from './pages/homefolks/AboutPage';
import ArticlesPage from './pages/homefolks/ArticlesPage';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import theme from './utils/constants/theme';

function App() {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          {/*
           * Render Halaman Home
           * Jika ingin diubah, maka ubah di Halaman Home.
           */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route path="/homefolks/about" element={<AboutPage />}></Route>
            <Route
              path="/homefolks/articles"
              element={<ArticlesPage />}
            ></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
