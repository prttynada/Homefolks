// Import Styled Component
import styled, { css } from 'styled-components';

// Membuat Component Button
const Button = styled.button`
  padding: ${({ theme, size }) => theme.paddings[size] || theme.paddings.md};
  font-size: ${({ theme, size }) =>
    theme.fontsizes[size] || theme.fontsizes.md};
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  color: ${({ theme, fontColor }) =>
    theme.colors[fontColor] || theme.colors.white};
  background-color: #4361ee;
  border: none;
  cursor: pointer;
  // PROPS VARIANT
  background-color: ${({ theme, variant }) =>
    theme.colors[variant] || theme.colors.primary};
  // PROPS FULL
  /**
    * Jika ada props full, set width 100% dan display block
    */
  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}
`;

// Export Button
export default Button;
