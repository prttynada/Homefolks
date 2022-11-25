import styled from 'styled-components';

const StyledSteps = styled.div`
  margin: 5rem auto;
  padding: 1rem;
  background-color: #f8f9fa;
  section {
    margin: 1rem;
    text-align: center;
  }
  h2 {
    margin-bottom: 1rem;
    font-size: 2.44rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  .subtitle {
    color: ${({ theme }) => theme.colors.blackcolor};
    margin-bottom: 4rem;
    font-weight: 500;
  }
  .steps__container {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  @media (min-width: 768px) {
    .steps__container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

export default StyledSteps;
