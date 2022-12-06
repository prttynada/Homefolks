import {
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiKey } from 'react-icons/fi';
import Button from '../ui/Button';
import StyledLogin, { Container } from './Login.Styled';
import login from '../../assets/images/login.png';

function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
          <form action="" onSubmit="">
            <div className="login__formEl">
              <InputGroup size="lg">
                <InputLeftAddon children={<Icon as={FiUser} />} />
                <Input type="email" placeholder="Masukkan Email" />
              </InputGroup>
            </div>
            <div className="login__formEl">
              <InputGroup size="lg">
                <InputLeftAddon children={<Icon as={FiKey} />} />
                <Input
                  type={show ? 'text' : 'password'}
                  placeholder="Masukkan Password"
                />
                <InputRightElement width="4.5rem">
                  <Button
                    size="sm"
                    variant="softgray"
                    fontColor="blackcolor"
                    onClick={handleClick}
                  >
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </div>
            <div className="pass">
              <Link to="/">Forget Your Password?</Link>
            </div>
            <Button size="lg" full>
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
