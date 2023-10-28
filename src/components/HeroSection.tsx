import React from 'react';
import { 
    Hero,
    Titulo, 
    Descripcion, 
    Social, 
    Github, 
    Linkedin, 
    Icons, 
    SubTitulo,
    TyperWriterEffect,
    ProfilePic
} from './Styled/Styled.HeroSection';
import TypeWriter from '../hooks/TyperWriter';
import ProfilePicture from "../assets/images/foto.jpg"

const HeroSection = () => {
    const text ="Software Developer";
    const [typedText, isComplete] = TypeWriter('Software Developer', 100, 15000);

    return (
        <Hero>
            <Titulo>Hola! Soy Patricio</Titulo>
            <TyperWriterEffect>
                <SubTitulo>{typedText}</SubTitulo>
            </TyperWriterEffect>
            <div>
                <ProfilePic src={ProfilePicture} />
            </div>
            <Descripcion>      
                Bienvenidos a mi Portafolio, soy Patricio Fredes, desarrollador de software apasionado por la innovación y la superación constante. 
                Me especializo en crear soluciones eficientes y estoy siempre listo para enfrentar nuevos desafíos en proyectos emocionantes.
            </Descripcion>
            <Social>
                <Icons href='https://github.com/PatoFredesTi'><Github size={40}/></Icons>
                <Icons href='https://www.linkedin.com/in/patriciofredesti/'><Linkedin size={40}/></Icons>
            </Social>
        </Hero>
    );
};

export default HeroSection;