import styled from 'styled-components';

const StyledSearch = styled.div`
  border-bottom: 1px solid #3c88ab;

  .searchForm {
    padding: 1rem;
  }
  input {
    background-color: transparent;
    color: white;
    outline: none;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: #edf1f2;
    }
    :-ms-input-placeholder {
      color: #edf1f2;
    }
  }
  .userChat {
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    cursor: pointer;
  }
  .userChat:hover {
    background-color: #3c88ab;
  }
  .userChat img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  span {
    display: none;
    font-size: 1.2rem;
    font-weight: 500;
  }
  p {
    display: none;
    font-size: 1rem;
    color: #edf1f2;
  }
  @media screen and (min-width: 768px) {
    .userChat img {
      width: 50px;
      height: 50px;
    }
    span {
      display: block;
    }
    p {
      display: block;
    }
  }
  @media screen and (min-width: 992px) {
  }
`;

export default StyledSearch;
