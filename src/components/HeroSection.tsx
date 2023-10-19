import React, { useState, useEffect } from 'react';
import styles from './module/HeroSection.module.css';
import { FaGithub, FaLinkedin, FaEnvelope  } from 'react-icons/fa';

const HeroSection = () => {

    const [key, setKey] = useState(0);
    useEffect(()  => {
        const interval = setInterval(() => {
            setKey(prevKey => prevKey + 1);
        }, 20000);
    
        return () => clearInterval(interval);
    }, []);  

  return (
    <div className={styles.hero}>
      <h1>Hola a Todos, Soy Patricio</h1>
      <div className={styles.typewriter} key={key}>
        <h4>Software Developer</h4>
      </div>
      
      <p>
      Soy Patricio Fredes, desarrollador de software apasionado por la innovación y la superación constante. 
      Me especializo en crear soluciones eficientes y estoy siempre listo para enfrentar nuevos desafíos en proyectos emocionantes.
      </p>

      <div className={styles.socialIcons}>
        <a href='https://github.com/PatoFredesTi' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={30} className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/patriciofredesti/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className={styles.icon} />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
            <FaEnvelope  size={30} className={styles.icon} />
        </a>
      </div>

      <button className={styles.contactBtn}>Contact Me</button>
      <button className={styles.resumeBtn}>See My Resume</button>
    </div>
  );
};

export default HeroSection;