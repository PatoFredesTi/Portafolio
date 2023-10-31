import React, { useState } from 'react';
import {Nav, Logo, LogoIMG, Menu, MenuItem, BurgerIcon} from "./Styled/Styled.NavBar";
import logo from "../assets/images/logo.png"
import ToggleButton from "./ButtonTheme";
import { useTheme } from '../hooks/ThemeContext';
import { themes } from "../utils/themes";
import MenuIcon from '../assets/images/DarkMenu.svg';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme } = useTheme();
    const currentTheme = themes[theme];

    return (
        <Nav theme={currentTheme}>
            <Logo>
                <LogoIMG src={logo} alt="Logo" />
            </Logo>
            <BurgerIcon onClick={() => setMenuOpen(!menuOpen)}>
                <img src={MenuIcon} height={80} alt="Menu" />
            </BurgerIcon>
            <Menu open={menuOpen} theme={currentTheme}>
                <MenuItem theme={currentTheme}>Sobre Mi</MenuItem>
                <MenuItem theme={currentTheme}>Habilidades</MenuItem>
                <MenuItem theme={currentTheme}>Experiencia</MenuItem>
                <MenuItem theme={currentTheme}>Estudios</MenuItem>
                <MenuItem theme={currentTheme}>Proyectos</MenuItem>
                <MenuItem theme={currentTheme}>Contacto</MenuItem>
                <ToggleButton/>
            </Menu>
        </Nav>
    );
};

export default NavBar;