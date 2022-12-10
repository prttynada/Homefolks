import styled from 'styled-components';

const StyledChatSideBar = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: 25%;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 992px) {
    max-width: 100%;
  }
`;

export default StyledChatSideBar;
