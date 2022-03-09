import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    NavIcon,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./navbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                <NavIcon />
            </NavLogo>
            <NavMenu>
                <NavBtn>
                    <NavBtnLink to="/favorites">Favorites</NavBtnLink>                
                </NavBtn>
                <NavLink 
                  to="/contact" 
                  activeStyle={{ color: 'black' }}
                >
                    Contact
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;