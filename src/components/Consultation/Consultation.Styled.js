import styled from 'styled-components';

const StyledConsultation = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
  }
`;

export default StyledConsultation;
