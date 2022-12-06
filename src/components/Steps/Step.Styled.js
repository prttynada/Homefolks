import styled from 'styled-components';

const StyledStep = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.white};
  height: 300px;
  p {
    color: ${({ theme }) => theme.colors.blackcolor};
    font-size: ${({ theme }) => theme.fontsizes.sm};
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  .step__first {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontsizes.md};
    font-weight: bold;
  }
  .step__second {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontsizes.md};
    font-weight: bold;
  }
  .step__third {
    color: ${({ theme }) => theme.colors.danger};
    font-size: ${({ theme }) => theme.fontsizes.md};
    font-weight: bold;
  }
  img {
    max-width: 100%;
    max-height: 150px;
    border-radius: 25px;
    margin-top: 2rem;
  }
  @media (min-width: 768px) {
    flex-basis: 50%;
    padding: 2rem;
    h3 {
      font-size: 1.95rem;
    }
  }
  @media (min-width: 992px) {
    margin: auto 1rem;
    flex-basis: 25%;
  }
`;

export default StyledStep;
