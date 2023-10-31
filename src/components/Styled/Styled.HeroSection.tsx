
import styled, { DefaultTheme } from 'styled-components';
import { FaGithub, FaLinkedin} from 'react-icons/fa'

export const Hero = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    text-align: center;
`;

export const Titulo = styled.h1`
    font-size: 4rem;
    color: ${({ theme }) => theme.textColor};
    margin-bottom: 20px;
`

export const SubTitulo = styled.h4`
    color: ${({ theme }) => theme.textColor};
`

export const Descripcion = styled.p`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.textParraph};
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
    color: ${({ theme }) => theme.textParraph};
    &:hover{
        transform: scale(1.5);
        box-shadow: 10px 10px 10px 10px rgba(255, 255, 255, 255, 0.7);
    }
`;

export const Github = styled(FaGithub)`
    transition: transform 0.3s ease, box-shadow 0.3s ease;
`
export const Linkedin = styled(FaLinkedin)`
    transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

export const TyperWriterEffect = styled.div`
    display: inline;
    border-right: 2px solid;
    animation: blinkCursor 0.9s infinite;
    color: white;
`;

export const ProfilePic = styled.img`
    width: 200px;
    height: auto;
    border-radius: 10%;
    border: 2px solid #fff;
    margin-top: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

