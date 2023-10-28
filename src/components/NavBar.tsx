import React from "react";
import {Nav, Logo, LogoIMG, Menu, MenuItem} from "./Styled/Styled.NavBar";
import logo from "../assets/images/logo.png"
import ToggleButton from "./ButtonTheme";

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
                <ToggleButton/>
            </Menu>
        </Nav>
    );
};

export default NavBar;