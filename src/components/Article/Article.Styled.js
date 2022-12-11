import styled from 'styled-components';

const StyledArticle = styled.div`
  margin-bottom: 1rem;
  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  h3 {
    color: ${({ theme }) => theme.colors.blackcolor};
    font-size: 1.95rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  h3:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  p {
    color: #64748b;
    text-align: justify;
  }
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
  @media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;

export default StyledArticle;
