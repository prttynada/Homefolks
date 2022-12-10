import styled from 'styled-components';

const StyledMessage = styled.div`
  .message {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
  .owner {
    flex-direction: row-reverse;
    .messageContent {
        align-items: flex-end;
    }
    p {
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
        border-radius: 10px 0px 10px 10px
    }
  }
  .messageInfo {
    display: flex;
    flex-direction: column;
    color: gray;
    font-weight: 300;
    font-size: 0.8rem;
  }
  .messageInfo img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    object-fit: cover;
  }
  .messageContent {
    max-width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .messageContent img {
    width: 50%;
  }
  p {
    background-color: white;
    padding 10px 20px;
    border-radius: 0px 10px 10px 10px;
    max-width: max-content;
    font-size: 0.8rem;
  }
  @media screen and (min-width: 768px) {
    .messageInfo {
      font-size: 1rem;
    }
    .messageInfo img {
      width: 40px;
      height: 40px;
    }
    p {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 992px) {
  }
`;

export default StyledMessage;
