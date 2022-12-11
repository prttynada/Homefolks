import { Link } from 'react-router-dom';
import StyledArticle from './Article.Styled';

function Article({ article }) {
  return (
    <StyledArticle>
      <img
        src={
          article.poster ||
          'https://images.unsplash.com/photo-1657299170935-31e068229885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        }
        alt={article.title}
      />
      <Link to={`/homefolks/article/${article.id}`}>
        <h3>{article.title}</h3>
      </Link>
      <p>{article.body}</p>
    </StyledArticle>
  );
}

export default Article;
