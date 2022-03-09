import { FaHome } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: rgba(111, 160, 224, 0.075);
    border: 1px rgb(192, 132, 142);
    border-style: inset none;
    border-radius: 4px;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    border
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: rgb(84, 123, 175);
  font-size: 1.4rem;
  text-decoration: none;
`;

export const NavLink = styled(Link)`
color: rgb(84, 123, 175);
display: flex;
align-items: center;
font-size: 1.4rem;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&:hover {
  color: rgb(192, 132, 142)
}
`;

export const NavIcon = styled(FaHome)`
  color: rgb(84, 123, 175);
  @media screen and (height: 480px; ) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    cursor: pointer;
  }
  &:hover {
    color: rgb(192, 132, 142)
  }
  width: 200px;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: rgb(84, 123, 175);
  font-size: 1.4rem;
  outline: none;
  border: 1px solid rgb(192, 132, 142);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(192, 132, 142)
  }
`;