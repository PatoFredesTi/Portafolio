import styled from "styled-components";

export const ExperienceBack = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    text-align: center;
`;

export const ExperienceContainer = styled.div`
  position: relative;
  padding-left: 50px; // Asegúrate de tener espacio para la línea del tiempo
  &:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #333; // Color de la línea del tiempo
  }
`;

export const ExperienceEntry = styled.div`
  position: relative;
  margin-bottom: 20px;
  padding-left: 30px;
  &:before {
    content: '';
    position: absolute;
    left: -10px; // Alinea el círculo con la línea del tiempo
    top: 5px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #555; // Color del punto en la línea del tiempo
    border: 3px solid white; // Para darle un efecto de delineado al círculo
  }
`;

export const ExperienceTitle = styled.h3`
  font-size: 1.5em;
  margin: 0;
`;

export const ExperiencePeriod = styled.h4`
  font-size: 1.2em;
  font-weight: normal;
  color: #666;
`;

export const ExperienceDescription = styled.p`
  text-align: justify;
`;


