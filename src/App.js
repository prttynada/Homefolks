import { ChakraProvider } from '@chakra-ui/react';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
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
import { AuthContext } from './context/AuthContext';

function App() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
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
        <Routes>
          <Route
            path="/"
            element={<HomePage user={currentUser.displayName} />}
          ></Route>
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
