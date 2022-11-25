import StyledContainer from './Container.Styled';

function Container(props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}

export default Container;
