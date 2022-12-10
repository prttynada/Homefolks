/* eslint-disable no-unused-vars */
import {
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FiUser, FiKey, FiEye, FiEyeOff } from 'react-icons/fi';
import Button from '../ui/Button';
import StyledLogin, { Container } from './Login.Styled';
import login from '../../assets/images/login.png';
import { auth } from '../../firebase';

function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError(true);
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
            {error && (
              <span className="error" style={{ color: 'red' }}>
                Oops, terjadi kesalahan
              </span>
            )}
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
