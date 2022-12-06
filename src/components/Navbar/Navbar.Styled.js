import styled from 'styled-components';

const StyledNavbar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1.5rem;
  color: #fff;
  nav {
    display: flex;
    flex-direction: row;
  }
  .login {
    color: ${({ theme }) => theme.colors.primary};
  }
  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  .login a {
    background-color: #ffffff;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
  .nav__menu {
    font-size: 50px;
  }
  ul {
    list-style: none;
  }
  @media (max-width: 767px) {
    .brand {
      margin-top: 17px;
      margin-left: 10px;
    }
    .nav__list {
      display: none;
      position: absolute;
      background-color: #f1f1f1;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      left: 0;
    }
    .nav__list a {
      color: ${({ theme }) => theme.colors.blackcolor};
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
    .nav__list a:hover {
      background-color: #ddd;
    }
    .nav__link:hover .nav__list {
      display: block;
    }
  }
  @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav__menu {
      display: none;
    }
    .nav__list {
      display: flex;
    }
    ul {
      display: flex;
      flex-direction: column;
    }
    li {
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    a {
      color: #fff;
      text-decoration: none;
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

export default StyledNavbar;
