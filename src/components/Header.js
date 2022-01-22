import React, { useState } from "react";
import styled from "styled-components";
// import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from '@mui/icons-material/Language';
function Header() {
  const [open, setOpen] = useState(false);
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
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panel</a>
      </MenuCenter>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#"> Account</a>
        <a href="#" onClick={() => setOpen(true)}>Menu</a>
      </RightMenu>
      <BurgerMenu show={open}>
        <CloseWrapper>
          <CustomClose onClick={() => setOpen(false)} />
        </CloseWrapper>
        <li>
          <a href="https://www.tesla.com/inventory/new/m3">Existing Inventory</a>
        </li>
        <li>
          <a href="https://www.tesla.com/inventory/used/m3">Used Inventory</a>
        </li>
        <li>
          <a href="https://www.tesla.com/tradein">Trade-In</a>
        </li>
        <li>
          <a href="https://www.tesla.com/drive">Test Drive</a>
        </li>
        <li>
          <a href="https://www.tesla.com/cybertruck">CyberTruck</a>
        </li>
        <li>
          <a href="https://www.tesla.com/semi">Semi</a>
        </li>
        <li>
          <a href="https://www.tesla.com/charging">Charging</a>
        </li>
        <li>
          <a href="https://www.tesla.com/powerwall">Powerwall</a>
        </li>
        <li>
          <a href="https://www.tesla.com/commercial">Commercial Energy</a>
        </li>
        <li>
          <a href="https://www.tesla.com/utilities">Utilities</a>
        </li>
        <li>
          <a href="https://www.tesla.com/findus?v=2&bounds=52.024081328476285%2C-66.307618375%2C25.441253381880866%2C-132.225587125&zoom=5&filters=store%2Cservice%2Csupercharger%2Cdestination%20charger%2Cbodyshop%2Cparty">Find us</a>
        </li>
        <li>
          <a href="https://www.tesla.com/support">Support</a>
        </li>
        <li>
          <a href="https://ir.tesla.com/#tab-quarterly-disclosure">Investor Relations</a>
        </li>
        <Language> <CustomLanguage /> United States <br /> <a href="">English</a></Language>
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
  color: #5F6168;
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
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
  & :hover{
    background-color: rgba(288, 288, 288, 0.5);
    padding: 10px 10px;
    border-radius: 10px;
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
    margin-right: 10px;
    cursor: pointer;
  }
  & :hover{
    background-color: rgba(288, 288, 288, 0.5);
    padding: 10px 10px;
    border-radius: 10px;
  }

`;
const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.1s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CustomLanguage = styled(LanguageIcon)`

`
const Language = styled.li`
  a{
    padding-left: 28px;
  }
  & :hover{
    text-decoration: underline;
  }
`
