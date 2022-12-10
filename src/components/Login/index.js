import {
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiKey, FiEye, FiEyeOff } from 'react-icons/fi';
import Button from '../ui/Button';
import StyledLogin, { Container } from './Login.Styled';
import login from '../../assets/images/login.png';

function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [errorMessages, setErrorMessages] = useState({});

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // User Login info
  const database = [
    {
      email: 'user1@gmail.com',
      password: 'pass1',
    },
    {
      email: 'user2@gmail.com',
      password: 'pass2',
    },
  ];

  const errors = {
    email: 'invalid email',
    pass: 'invalid password',
  };

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    var { email, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.email === email.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: 'pass', message: errors.pass });
      } else {
        localStorage.setItem('email', email);
        localStorage.setItem('password', pass);

        window.location.reload();
      }
    } else {
      // Username not found
      setErrorMessages({ name: 'email', message: errors.email });
    }
  };

  return (
    <Container>
      <StyledLogin>
        <div className="hero__left">
          <h2>Login</h2>
          <p>
            Assisting Your
            <span> Family Issues </span>
            With Our Best Services
          </p>
          <form onSubmit={handleSubmit}>
            <div className="login__formEl">
              <InputGroup size="lg">
                <InputLeftAddon children={<Icon as={FiUser} />} />
                <Input type="email" placeholder="Masukkan Email" name="email" />
                {renderErrorMessage('email')}
              </InputGroup>
            </div>
            <div className="login__formEl">
              <InputGroup size="lg">
                <InputLeftAddon children={<Icon as={FiKey} />} />
                <Input
                  type={show ? 'text' : 'password'}
                  placeholder="Masukkan Password"
                  name="pass"
                />
                {renderErrorMessage('pass')}
                <InputRightElement width="4.5rem">
                  <IconButton
                    variant="no-outline"
                    colorScheme="black"
                    aria-label="Show"
                    fontSize="20px"
                    onClick={handleClick}
                    icon={show ? <FiEyeOff /> : <FiEye />}
                  />
                </InputRightElement>
              </InputGroup>
            </div>
            <div className="pass">
              <Link to="/forget">Forget Your Password?</Link>
            </div>
            <Button type="submit" size="lg" full>
              Login
            </Button>
            <div className="signup">
              <p>
                Don&apos;t have account?
                <Link to="/signup"> Register</Link>
              </p>
            </div>
          </form>
        </div>
        <div className="hero__right">
          <img src={login} alt="family illustration" />
        </div>
      </StyledLogin>
    </Container>
  );
}

export default Login;
