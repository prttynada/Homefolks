import { Link } from 'react-router-dom';
import StyledArticle from './Article.Styled';
import woman from '../../assets/images/woman.png';

function Article() {
  return (
    <StyledArticle>
      <img src={woman} alt="article" />
      <Link to="/homefolks/article">
        <h3>Sebuah artikel</h3>
      </Link>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, voluptate
        omnis fugiat amet officiis facilis dolor incidunt id quod, quisquam
        aliquid dignissimos atque harum accusantium, consectetur labore
        corrupti. Labore, quos.
      </p>
    </StyledArticle>
  );
}

export default Article;
