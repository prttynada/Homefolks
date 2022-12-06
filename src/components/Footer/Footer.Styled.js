import styled from 'styled-components';

const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 2rem;
  footer {
    display: flex;
    flex-direction: column;
  }
  h2 {
    margin-bottom: 1rem;
    font-weight: bold;
  }
  p {
    margin-bottom: 2rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  li {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  @media (min-width: 768px) {
    footer {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    h1 {
      margin-bottom: 0;
    }
    ul {
      flex-direction: row;
    }
    li {
      margin: 0 1rem;
    }
  }
`;

export default StyledFooter;
