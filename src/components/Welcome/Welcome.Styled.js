import styled from 'styled-components';

const Container = styled.div`
  margin: 5rem auto;
  padding: 1rem;
  @media screen and (min-width: 992px) {
    max-width: 1200px;
  }
`;

const StyledWelcome = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  padding: 3rem;

  .hero__left {
    margin-bottom: 1rem;
  }
  h2 {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 1rem;
    font-size: 2.44rem;
    font-weight: bold;
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
    margin: 4rem auto auto;
  }
  .card {
    padding: 1rem;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.colors.white};
    height: 150px;
    max-width: 100px;
    text-align: center;
  }
  .card h3 {
    color: ${({ theme }) => theme.colors.danger};
    font-size: ${({ theme }) => theme.fontsizes.sm};
    font-weight: bold;
  }
  .card img {
    max-width: 100%;
    margin: 1rem auto 1rem;
  }
  @media screen and (min-width: 769px) {
    .card {
      height: 200px;
      max-width: 100%;
    }
    .card h3 {
      font-size: ${({ theme }) => theme.fontsizes.md};
    }
    .card img {
      max-height: 100px;
    }
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

export default StyledWelcome;
export { Container };
