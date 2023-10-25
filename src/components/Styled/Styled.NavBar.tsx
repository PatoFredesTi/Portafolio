import React from 'react';
import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #171C28;
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 1000;
`;

export const Menu = styled.ul`
    list-style-type:none;
    display: flex;
    gap: 1rem
`;

export const MenuItem = styled.a`
    color: #fff;
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
