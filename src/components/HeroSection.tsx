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
    TyperWriterEffect
} from './Styled/Styled.HeroSection';
import TypeWriter from '../hooks/TyperWriter';

const HeroSection = () => {
    const text ="Software Developer";
    const [typedText, isComplete] = TypeWriter('Software Developer', 100, 15000);

    return (
        <Hero>
            <Titulo>Hola! Soy Patricio</Titulo>
            <TyperWriterEffect>
                <SubTitulo>{typedText}</SubTitulo>
            </TyperWriterEffect>
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