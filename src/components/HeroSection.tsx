import React from 'react';
import { Hero, Titulo, Descripcion, Social, Github, Linkedin, Icons } from './Styled/Styled.HeroSection';


const HeroSection = () => {
    return (
        <Hero>
            <Titulo>Hola! Soy Patricio</Titulo>
            <h4>Software Developer</h4>
            <Descripcion>      
                Soy Patricio Fredes, desarrollador de software apasionado por la innovación y la superación constante. 
                Me especializo en crear soluciones eficientes y estoy siempre listo para enfrentar nuevos desafíos en proyectos emocionantes.
            </Descripcion>
            <Social>
                <Icons><Github/></Icons>
                <Icons><Linkedin/></Icons>
            </Social>
        </Hero>
    );
};

export default HeroSection;