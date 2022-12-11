import styled from 'styled-components';

const Container = styled.div`
  margin: 5rem auto;
  padding: 1rem;
  @media screen and (min-width: 992px) {
    max-width: 1200px;
  }
`;

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  .hero__left {
    margin-bottom: 1rem;
    align-items: center;
    text-align: center;
    h2 {
      margin: auto 2rem;
      font-size: 1rem;
    }
    p {
      color: ${({ theme }) => theme.colors.graycolor};
    }
  }
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
  p {
    color: ${({ theme }) => theme.colors.blackcolor};
    margin-bottom: 3rem;
    text-align: center;
  }
  img {
    max-width: 100%;
    height: 5rem;
    border-radius: 25px;
    margin: 2rem auto 1rem;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    .hero__right {
      flex-basis: 90%;
    }
    .hero__left {
      flex-basis: 50%;
      h2 {
        font-size: 1.3rem;
      }
    }
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
      text-align: justify;
    }
    img {
      height: 10rem;
    }
    .hero__left p {
      text-align: center;
    }
  }
`;

export default StyledAbout;
export { Container };
