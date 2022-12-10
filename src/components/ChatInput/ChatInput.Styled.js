import styled from 'styled-components';

const StyledChatInput = styled.div`
  height: 2.5rem;
  background-color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    width: 100%;
    outline: none;
    border: none;
  }
  .send {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .icon {
    cursor: pointer;
  }
`;

export default StyledChatInput;
