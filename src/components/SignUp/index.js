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
import {
  FiUser,
  FiKey,
  FiMail,
  FiImage,
  FiEyeOff,
  FiEye,
  FiUserCheck,
} from 'react-icons/fi';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db, storage } from '../../firebase';
import Button from '../ui/Button';
import StyledLogin, { Container } from './SignUp.Styled';
import signup from '../../assets/images/signup.png';

function SignUp() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[4].value;
    const file = e.target[6].files[0];

    if (confirmPassword !== password) {
      return setError(true);
    }

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (err) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, 'users', response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, 'userChat', response.user.uid), {});
            navigate('/');
          });
        }
      );
    } catch (err) {
      setError(true);
    }
  };

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
          <form onSubmit={handleSubmit}>
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
                  placeholder="Masukkan password minimal 6 karakter"
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
            <div className="login__formEl">
              <InputGroup size="lg">
                <InputLeftAddon children={<Icon as={FiUserCheck} />} />
                <Input
                  type={show ? 'text' : 'password'}
                  placeholder="Masukkan kembali password"
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
              {error && (
                <span className="error">
                  Silahkan cek kembali password Anda!
                </span>
              )}
            </div>
            <div className="login__formEl">
              <input type="file" id="file" style={{ display: 'none' }} />
              <label htmlFor="file">
                <FiImage />
                <span>Tambahkan Foto Profil</span>
              </label>
            </div>
            <Button type="submit" size="lg" full>
              Signup
            </Button>
            {error && <span className="error">Oops, terjadi kesalahan</span>}
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
