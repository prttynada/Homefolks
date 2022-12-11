import styled from 'styled-components';

const StyledArticles = styled.div`
  margin: 5rem auto;

  .articles {
    text-align: center;
  }

  .articles__title {
    margin-bottom: 3rem;
    font-size: 2.44rem;
    font-weight: bold;
    color: #4361ee;
  }

  .article__container {
    display: flex;
    flex-direction: column;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .article__container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
  }
`;

export default StyledArticles;
