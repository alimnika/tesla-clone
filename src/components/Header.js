import React from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
  return (
    <Container>
      <a href="#">
        <img src="/image/logo.png" alt="" />
      </a>
      <MenuCenter>
        <a href="#">Model S</a>

        <a href="#">Model 3</a>

        <a href="#">Model Y</a>

        <a href="#">Model X</a>
      </MenuCenter>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu />
      </RightMenu>
    </Container>
  );
}
export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items:center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;

  img{
    height: 80px;
  }
 
`;
// const Image = styled.img`
//   // width:50%;
  
// `;
const MenuCenter = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
  @media(max-width:768px){
    display:none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right:10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`
