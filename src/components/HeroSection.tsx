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
import ProfilePicture from "../assets/images/foto.jpg";
import { useTheme } from '../hooks/ThemeContext';
import { themes } from "../utils/themes";

const HeroSection = () => {
    const [typedText] = TypeWriter('Software Developer', 100, 15000);
    const { theme } = useTheme();

    const currentTheme = themes[theme];

    return (
        <Hero theme={currentTheme}>
            <Titulo theme={currentTheme}>Hola! Soy Patricio</Titulo>
            <TyperWriterEffect>
                <SubTitulo theme={currentTheme}>{typedText}</SubTitulo>
            </TyperWriterEffect>
            <div>
                <ProfilePic src={ProfilePicture} />
            </div>
            <Descripcion theme={currentTheme}>      
                Bienvenidos a mi Portafolio, soy Patricio Fredes, desarrollador de software apasionado por la innovación y la superación constante. 
                Me especializo en crear soluciones eficientes y estoy siempre listo para enfrentar nuevos desafíos en proyectos emocionantes.
            </Descripcion>
            <Social>
                <Icons href='https://github.com/PatoFredesTi' theme={currentTheme}><Github size={40}/></Icons>
                <Icons href='https://www.linkedin.com/in/patriciofredesti/' theme={currentTheme}><Linkedin size={40}/></Icons>
            </Social>
        </Hero>
    );
};

export default HeroSection;
