import React from "react";
import {Nav, Logo, LogoIMG, Menu, MenuItem} from "./Styled/Styled.NavBar";
import logo from "../assets/images/logo.png"

const NavBar = () => {
    return (
        <Nav>
            <Logo>
                <LogoIMG src={logo} alt={logo} />
            </Logo>
            <Menu>
                <MenuItem>Sobre Mi</MenuItem>
                <MenuItem>Habilidades</MenuItem>
                <MenuItem>Experiencia</MenuItem>
                <MenuItem>Estudios</MenuItem>
                <MenuItem>Proyectos</MenuItem>
                <MenuItem>Contacto</MenuItem>
            </Menu>
        </Nav>
    );
};

export default NavBar;