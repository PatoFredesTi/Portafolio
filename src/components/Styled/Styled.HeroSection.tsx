import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin} from 'react-icons/fa'

export const Hero = styled.div`
    background-color: #171C28;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    text-align: center;
`

export const Titulo = styled.h1`
    font-size: 4rem;
    color: white;
    margin-bottom: 20px;
`

export const Descripcion = styled.p`
    font-size: 1.5rem;
    color: #cccccc;
    margin-bottom: 30px;
    margin-top: 30px;
    max-width: 70%;
`

export const Social = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
`;

export const Icons = styled.a`
    margin: 0 10px;
    display: inline-block;
    border-radius: 0%;
    &:hover{
        transform: scale(1.5);
        box-shadow: 10px 10px 10px 10px rgba(255, 255, 255, 255, 0.7);
    }
`;

export const Github = styled(FaGithub)`
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    color: #fff;
`
export const Linkedin = styled(FaLinkedin)`
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    color: #fff;
`;


