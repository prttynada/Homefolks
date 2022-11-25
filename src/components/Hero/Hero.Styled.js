import styled from 'styled-components';

const Container = styled.div`
  margin: 5rem auto;
  padding: 1rem;
  @media screen and (min-width: 992px) {
    max-width: 1200px;
  }
`;

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  .hero__left {
    margin-bottom: 1rem;
  }
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }
  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
  p {
    color: ${({ theme }) => theme.colors.graycolor};
    margin-bottom: 3rem;
    text-align: center;
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
    margin-top: 4rem;
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

export default StyledHero;
export { Container };
