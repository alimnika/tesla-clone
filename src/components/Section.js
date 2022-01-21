import {React} from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
function Section({title, description, leftButton, rightButton, backgroundImg}) {
  return (
    <Container bgImage={backgroundImg}>
      <Fade >
      <Text>
        <h1>{title}</h1>
        <p>{description}</p>
      </Text>
      </Fade>
      <ButtonWrapper>
        <Buttons>
          <LeftButton>{leftButton}</LeftButton> 
          {rightButton && <RightButton>{rightButton}</RightButton> }
          
        </Buttons>
        <DownArror src="/image/arrow-down.svg" />
      </ButtonWrapper>
    </Container>
  );
}

export default Section;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${props => `url('/image/${props.bgImage}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Text = styled.div`
  padding: 20vh;
  text-align: center;
`;
const ButtonWrapper = styled.div`

`;
const LeftButton = styled.div`
  background-color: #1e1e2a;
  height: 40px;
  width: 256px;
  color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin:8px;
`;
const RightButton = styled(LeftButton)`
  background-color: #eeeeee;
  color: #1e1e2a;
`;
const DownArror = styled.img`
  margin-top: 20px;
  height: 40px;
  color: white;
  animation: animateDown infinite 1.5s;
  overflow-x:hidden;
`;
const Buttons = styled.div`
display:flex;
margin-bottom:30px;
@media(max-width:768px){
  flex-direction:column;
}
`;
