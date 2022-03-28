/**
 * @author Vibhor Bhatnagar
 */

import React from 'react'
import { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Nav,Logo,MenuIcon, Menu, NavLinks } from './NavUser.style'
import HomeAccountDropdown from '../Dropdown/HomeAccountDropdown'
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

function Navbar() {

  const [isClicked, setIsClicked] = useState(false);

  return (
    <Nav>
      <Logo href="">
        E<span>co</span>F<span>resh</span>
      </Logo>

      <MenuIcon onClick={() => setIsClicked(!isClicked)}>
        <span />
        <span />
        <span />
      </MenuIcon>
      
      <Menu isClicked={isClicked}>
        <NavLinks to="/home">Home</NavLinks>
        <NavLinks to="/uploadRecipeNavigation">Upload Recipe</NavLinks>
        <div className="button_container">
        <ShoppingButton />
          <HomeAccountDropdown />
          
        </div>
      </Menu>
      <div className="button_container">
          <ShoppingButton />
          <HomeAccountDropdown />
        </div>
    </Nav>
  )
}

const ShoppingButton = () => {
  return <button className="buttons"><ShoppingCartIcon /></button>;
};

export default Navbar