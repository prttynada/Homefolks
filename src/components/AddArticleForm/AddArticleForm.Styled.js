import styled from 'styled-components';

const StyledAddArticleForm = styled.div`
  margin: 5rem 1rem;
  padding: 1rem;

  section {
    display: flex;
    flex-direction: column;
  }
  .addArticleForm__left {
    display: none;
  }
  img {
    max-width: 100%;
    border-radius: 25px;
    height: auto;
  }
  h2 {
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.44rem;
    margin-bottom: 1rem;
  }
  .addArticleForm__formEl {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  input {
    outline: none;
    padding: 1rem 0.5rem;
    border-radius: 10px;
    border: 1px solid #64748b;
  }
  textarea {
    outline: none;
    padding: 1rem 0.5rem;
    border-radius: 10px;
    border: 1px solid #64748b;
  }
  input:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  textarea:focus {
    order: 1px solid ${({ theme }) => theme.colors.primary};
  }
  /* Medium Screen */
  @media (min-width: 768px) {
    /* Nothing to do here */
  }
  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 5rem auto;

    section {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .addArticleForm__left {
      display: block;
      flex-basis: 60%;
    }

    .addArticleForm__right {
      flex-basis: 40%;
    }
  }
`;

export default StyledAddArticleForm;
