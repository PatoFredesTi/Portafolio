import React from 'react';
import styles from './module//Skills.module.css';

const skillsData = [
  { name: "React JS", icon: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' height='40' />},
  { name: "Javascript", icon: <img src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' height='40' />},
  { name: "Typescript", icon: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png' height='40' />},
  { name: "HTML5", icon: <img src='https://cdn-icons-png.flaticon.com/512/174/174854.png' height='40' />},
  { name: "CSS3", icon: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png' height='40' />},
  { name: "Bootstrap", icon: <img src='https://cdn-icons-png.flaticon.com/512/5968/5968672.png' height='40' />},
  { name: "AWS", icon: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png' height='40' />},
];

const Skills = () => {
  return (
    <div className={styles.skillsSection}>
      <h2 className={styles.skillsH2}>Habilidades</h2>
      
      <div className={styles.skillsContainer}>
        {skillsData.map(skill => (
          <div className={styles.skillCard} key={skill.name}>
            <span className={styles.skillIcon}>{skill.icon}</span>
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;