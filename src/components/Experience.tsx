import React from "react";

import styled from 'styled-components';
import { ExperienceContainer,
         ExperienceEntry, ExperienceDescription, ExperiencePeriod, ExperienceTitle, ExperienceBack } from "./Styled/Styled.Experience";
import { useTheme } from '../hooks/ThemeContext';
import { themes } from "../utils/themes";

const experiences = [
  {
    id: 1,
    title: "Practicante Desarrollador de Software",
    company: "DualVision",
    period: "Noviembre 2021 - Febrero 2022",
    description: "Descripción detallada de las responsabilidades y logros..."
    // ... otros datos relevantes
  },
  {
    id: 1,
    title: "Practicante Desarrollador de Software",
    company: "DualVision",
    period: "Noviembre 2021 - Febrero 2022",
    description: "Descripción detallada de las responsabilidades y logros..."
    // ... otros datos relevantes
  },
  {
    id: 1,
    title: "Practicante Desarrollador de Software",
    company: "DualVision",
    period: "Noviembre 2021 - Febrero 2022",
    description: "Descripción detallada de las responsabilidades y logros..."
    // ... otros datos relevantes
  },
  // ... más experiencias
];

const Experience = () => {
  return (
    <ExperienceBack>
        <h2>Experiencia Laboral</h2>
        <ExperienceContainer>
            {experiences.map(exp => (
            <ExperienceEntry key={exp.id}>
            <ExperienceTitle>{exp.title} en {exp.company}</ExperienceTitle>
            <ExperiencePeriod>{exp.period}</ExperiencePeriod>
            <ExperienceDescription>{exp.description}</ExperienceDescription>
            </ExperienceEntry>
            ))}
        </ExperienceContainer>
    </ExperienceBack>
  );
};

export default Experience;
