import styled from 'styled-components';

const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  .summary__right {
    margin-bottom: 1rem;
  }
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
    font-size: 2.44rem;
    font-weight: bold;
  }
  p {
    color: ${({ theme }) => theme.colors.graycolor};
    margin-bottom: 2rem;
    text-align: justify;
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 769px) {
  }
  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    .summary__right {
      flex-basis: 50%;
    }
    h2 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
    }
    img {
      height: 400px;
    }
  }
`;

export default StyledSummary;
