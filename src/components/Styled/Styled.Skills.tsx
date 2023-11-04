import styled from 'styled-components';

export const SkillsSection = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    text-align: center;
`
export const SubTitulo = styled.h2`
    color: ${({ theme }) => theme.textColor};
`;

export const SkillsContainers = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 30px;
    max-width: 1200px; 
`;

export const SkillCard = styled.div`
    background-color: ${({ theme }) => theme.backgroundColorCard};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;  
    cursor: pointer;
    width: calc(20% - 20px); 
    margin-bottom: 20px; 

    &:hover{
        transform: scale(1.1);
    }
`;

export const SkillIcon = styled.span`
    font-size: 24px;
    margin-bottom: 10px;
    display: block;
`;

export const SkillName = styled.p`
    font-size: 20px;
    font-weight: 600;
`;

