import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import Button from '../ui/Button';
import StyledNavbar from './Navbar.Styled';

function Navbar({ name = 'Login' }) {
  const navigate = useNavigate();
  const handleClick = () => {
    signOut(auth);
    navigate('/');
  };

  return (
    <StyledNavbar>
      <nav>
        <div className="nav__link">
          <Button href="#" id="menu" className="nav__menu">
            ☰
          </Button>
          <div className="nav__list">
            <ul>
              <li className="login">
                <Button
                  href=""
                  variant="white"
                  size="lg"
                  fontColor="primary"
                  onClick={name === 'Logout' ? handleClick : null}
                >
                  <Link
                    to={
                      name === 'Login' || name === 'Logout'
                        ? '/login'
                        : '/signup'
                    }
                  >
                    {name}
                  </Link>
                </Button>
              </li>
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
        </div>
        <div className="brand">
          <h1>HomeFolks</h1>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
