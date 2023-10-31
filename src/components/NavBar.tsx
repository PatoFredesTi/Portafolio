import {Nav, Logo, LogoIMG, Menu, MenuItem} from "./Styled/Styled.NavBar";
import logo from "../assets/images/logo.png"
import ToggleButton from "./ButtonTheme";
import { useTheme } from '../hooks/ThemeContext';
import { themes } from "../utils/themes";

const NavBar = () => {
    const { theme } = useTheme();
    const currentTheme = themes[theme];

    return (
        <Nav theme={currentTheme}>
            <Logo>
                <LogoIMG src={logo} alt={logo} />
            </Logo>
            <Menu >
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