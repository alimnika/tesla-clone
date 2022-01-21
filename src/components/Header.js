import React, { useState }from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
function Header() {
  const [open, setOpen] = useState(false)
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
        <CustomMenu onClick={()=>setOpen(true)} />
      </RightMenu>
      <BurgerMenu show={open}>
        <CloseWrapper >
        <CustomClose  onClick={()=>setOpen(false)} />
        </CloseWrapper>
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used Inventory</a>
        </li>
        <li>
          <a href="">Trade-In</a>
        </li>
        <li>
          <a href="">Test Drive</a>
        </li>
        <li>
          <a href="">CyberTruck</a>
        </li>
        <li>
          <a href="">Semi</a>
        </li>
        <li>
          <a href="">Charging</a>
        </li>
        <li>
          <a href="">Powerwall</a>
        </li>
        <li>
          <a href="">Commercial Energy</a>
        </li>
        <li>
          <a href="">Utilities</a>
        </li>
        <li>
          <a href="">Find us</a>
        </li>
        <li>
          <a href="">Support</a>
        </li>
        <li>
          <a href="">Investor Relations</a>
        </li>
      </BurgerMenu>
    </Container>
  );
}
export default Header;

const Container = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;

  img {
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
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style:none;
  padding: 20px;
  display:flex;
  flex-direction: column;
  text-align:start;
  transform: ${props=>props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform 0.1s ease-in;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    a{
      font-weight: 600;
    }
  }
  
`;
const CloseWrapper = styled.div`
  display:flex;
  justify-content: flex-end;
`
const CustomClose = styled(CloseIcon)`
cursor: pointer;
`