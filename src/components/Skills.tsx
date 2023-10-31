import React from 'react';
import { SkillsSection, SubTitulo, SkillsContainers, SkillCard, SkillIcon, SkillName } from './Styled/Styled.Skills';
import { useTheme } from '../hooks/ThemeContext';
import { themes } from "../utils/themes";

const skillsData = [
    { name: "React JS", icon: <img height={80} src="https://static-00.iconduck.com/assets.00/react-javascript-js-framework-facebook-icon-2048x1822-f7kq7hho.png" alt="React js" /> }, 
    { name: "Javascript", icon: <img height={80} src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png" alt="Javascript" /> },
    { name: "Typescript", icon: <img height={80} src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript" /> },
    { name: "HTML", icon: <img height={80} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png" alt="HTML" /> },
    { name: "CSS", icon: <img height={80} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" alt="CSS" /> },
    { name: "Bootstrap", icon: <img height={80} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" alt="Bootstrap" />},
    { name: "Tailwind", icon: <img height={80} src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png" alt="Tailwind" />},
    { name: "PHP", icon: <img height={80} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" alt="PHP" />},
    { name: "Git", icon: <img height={80} src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" />},
  ];
const Skills = () => {
    const { theme } = useTheme();
    const currentTheme = themes[theme];

    return(
        <SkillsSection theme={currentTheme}>
            <SubTitulo theme={currentTheme}>Habilidades</SubTitulo>
            <SkillsContainers theme={currentTheme}>
                {skillsData.map(skill => (
                    <SkillCard theme={currentTheme}>
                        <SkillIcon>{skill.icon}</SkillIcon>
                        <SkillName>{skill.name}</SkillName>
                    </SkillCard>
                ))}
            </SkillsContainers>
        </SkillsSection>
    )
};

export default Skills;