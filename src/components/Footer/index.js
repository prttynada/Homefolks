import { Link } from 'react-router-dom';
import StyledFooter from './Footer.Styled';

function Footer() {
  return (
    <StyledFooter>
      <footer>
        <div>
          <h2>HomeFolks</h2>
          <p>Developed by C22-238 Team</p>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/homefolks/articles">Articles</Link>
            </li>
            <li>
              <Link to="/homefolks/about">About Us</Link>
            </li>
          </ul>
        </div>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
