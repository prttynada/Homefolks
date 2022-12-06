import styled from 'styled-components';

const Container = styled.div`
  margin: 5rem auto;
  padding: 1rem;
  @media screen and (min-width: 992px) {
    max-width: 1200px;
  }
`;

const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  .hero__left {
    margin-bottom: 1rem;
  }
  p {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 3rem;
    text-align: center;
    font-weight: 500;
  }
  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
  h2 {
    color: ${({ theme }) => theme.colors.blackcolor};
    font-size: 2.44rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
    margin-top: 4rem;
  }
  .login__formEl {
    margin-bottom: 2rem;
  }
  .pass {
    margin-bottom: 2rem;
    text-align: right;
    color: ${({ theme }) => theme.colors.blackcolor};
    font-weight: 500;
    font-size: 1rem;
  }
  .pass a {
    text-decoration: underline;
  }
  .signup p {
    margin: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.blackcolor};
    font-size: 1rem;
  }
  .signup a {
    text-decoration: underline;
    font-weight: bold;
  }
  @media screen and (min-width: 769px) {
  }
  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    .hero__left {
      flex-basis: 50%;
    }
    h2 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
      text-align: justify;
    }
    img {
      height: 500px;
    }
    p {
      max-width: 70%;
    }
  }
`;

export default StyledSignUp;
export { Container };
