import React from 'react';
import { Link } from 'react-scroll';
import styles from './module/NavBar.module.css';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Link to="heroSection" smooth={true} duration={500} className={styles.logo}>Patricio Fredes</Link>
      <ul className={styles.menu}>
        <li><Link to="heroSection" smooth={true} duration={500} className={styles.menuItem}>Sobre mí</Link></li>
        <li><Link to="skills" smooth={true} duration={500} className={styles.menuItem}>Skills</Link></li>
        <li><Link to="jobExperience" smooth={true} duration={500} className={styles.menuItem}>Experiencia Laboral</Link></li>
        <li><Link to="studies" smooth={true} duration={500} className={styles.menuItem}>Estudios</Link></li>
        <li><Link to="projects" smooth={true} duration={500} className={styles.menuItem}>Proyectos</Link></li>
        <li><Link to="contact" smooth={true} duration={500} className={styles.menuItem}>Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
