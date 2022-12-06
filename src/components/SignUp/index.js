import {
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiKey, FiUserCheck, FiMail } from 'react-icons/fi';
import Button from '../ui/Button';
import StyledLogin, { Container } from './SignUp.Styled';
import signup from '../../assets/images/signup.png';

function SignUp() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Container>
      <StyledLogin>
        <div className="hero__left">
          <h2>Signup</h2>
          <p>
            Assisting Your
            <span> Family Issues </span>
            With Our Best Services
          </p>
          <form action="" onSubmit="">
            <div className="login__formEl">
              <InputGroup size="lg">
                <InputLeftAddon children={<Icon as={FiUser} />} />
                <Input type="text" placeholder="Masukkan Nama" />
              </InputGroup>
            </div>
            <div className="login__formEl">
              <InputGroup size="lg">
                <InputLeftAddon children={<Icon as={FiMail} />} />
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
            <div className="login__formEl">
              <InputGroup size="lg">
                <InputLeftAddon children={<Icon as={FiUserCheck} />} />
                <Input
                  type={show ? 'text' : 'password'}
                  placeholder="Masukkan Ulang Password"
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
              Signup
            </Button>
            <div className="signup">
              <p>
                Already have account?
                <Link to="/login"> Login</Link>
              </p>
            </div>
          </form>
        </div>
        <div className="hero__right">
          <img src={signup} alt="family illustration" />
        </div>
      </StyledLogin>
    </Container>
  );
}

export default SignUp;
