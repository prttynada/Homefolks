import { ChakraProvider } from '@chakra-ui/react';
import { useContext, useState } from 'react';
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
import AddArticlePage from './pages/homefolks/AddArticlePage';
import { AuthContext } from './context/AuthContext';
import ArticleDetail from './pages/homefolks/ArticleDetail';
import Layout from './Layout';
import data from './utils/constants/data';

function App() {
  const { currentUser } = useContext(AuthContext);
  const [articles, setArticles] = useState(data);

  if (!currentUser) {
    return (
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <Layout name="Login">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/signup" element={<SignupPage />}></Route>
              <Route path="/forget" element={<ForgetPassPage />}></Route>
              <Route path="/homefolks/about" element={<AboutPage />}></Route>
              <Route
                path="/homefolks/articles"
                element={<ArticlesPage articles={articles} />}
              ></Route>
              <Route
                path="/homefolks/article"
                element={<ArticleDetail />}
              ></Route>
            </Routes>
          </Layout>
        </ThemeProvider>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <Layout name="Logout">
          <Routes>
            <Route
              path="/"
              element={<HomePage user={currentUser.displayName} />}
            ></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/homefolks/about" element={<AboutPage />}></Route>
            <Route
              path="/homefolks/articles"
              element={<ArticlesPage articles={articles} />}
            ></Route>
            <Route
              path="/homefolks/article"
              element={<ArticleDetail />}
            ></Route>
            <Route
              path="/homefolks/consultation"
              element={<ConsultPage />}
            ></Route>
            <Route
              path="/homefolks/add"
              element={
                <AddArticlePage articles={articles} setArticles={setArticles} />
              }
            ></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
