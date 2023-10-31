
import styled from 'styled-components';
import { ThemeStructure, themes } from '../../utils/themes';

interface MenuProps {
    open: boolean;
    theme:ThemeStructure;
}

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundColorNav};
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 1000;
`;

export const Menu = styled.ul<MenuProps>`
    list-style-type:none;
    display: flex;
    gap: 1rem;
    @media (max-width: 768px) {
        display: none;

        ${props => props.open && `
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 60px;
            right: 10px;
            width: 50%;  
            background-color: ${props.theme.backgroundColorNav};
            border-width: 2px;
            border-style: solid;
            border-radius: 20px;
            padding: 20px;
            margin-bot-20px;
            border-color: red;
        `}
    }
`;

export const MenuItem = styled.a`
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: backgorund-color 0.3s ease;
    cursor: pointer;
    &:hover{
        background-color: #3d4965;
    }
`;

export const Logo = styled.a`
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
`;

export const LogoIMG = styled.img`
    width: 48px;
    cursor: pointer
`;

export const BurgerIcon = styled.div`
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block; // Esto mostrará el ícono de hamburguesa en pantallas pequeñas
    }
`;