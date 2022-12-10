import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import AboutPage from './pages/homefolks/AboutPage';
import ArticlesPage from './pages/homefolks/ArticlesPage';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import HomePage from './pages/homefolks/HomePage';
import theme from './utils/constants/theme';
import ForgetPassPage from './pages/ForgetPass';
import ConsultPage from './pages/homefolks/ConsultPage';
import MoodPage from './pages/homefolks/MoodPage';

function App() {
  const navigate = useNavigate();

  if (!localStorage.getItem('email')) {
    return (
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route path="/forget" element={<ForgetPassPage />}></Route>
            <Route path="/homefolks/about" element={<AboutPage />}></Route>
            <Route
              path="/homefolks/articles"
              element={<ArticlesPage />}
            ></Route>
          </Routes>
        </ThemeProvider>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        {/*
         * Render Halaman Home
         * Jika ingin diubah, maka ubah di Halaman Home.
         */}
        <Routes>
          <Route path="/" element={<HomePage />}>
            {useEffect(() => {
              navigate('/');
            }, [])}
          </Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/homefolks/about" element={<AboutPage />}></Route>
          <Route path="/homefolks/articles" element={<ArticlesPage />}></Route>
          <Route
            path="/homefolks/consultation"
            element={<ConsultPage />}
          ></Route>
          <Route path="/homefolks/mood" element={<MoodPage />}></Route>
        </Routes>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
