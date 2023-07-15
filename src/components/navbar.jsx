import React from "react";
import {  getStyles } from "../styles/styles";
import Header from "./header";
import { WhatsappButton } from "../styles/whattsupButton";



const Navbar = ({language,setLanguage,text}) => {
    
    const styles = getStyles();
  return (
    <div>
    <nav style={styles.navbar}>
      <ul style={styles.navbarList}>
        <li style={styles.navbarItem}>
          <a href="/">Inicio</a>
        </li>
        <li style={styles.navbarItem}>
          <a href="#portfolio">{text.title}</a>
        </li>
        <li style={styles.navbarItem}>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
    <h1 style={styles.headerTitle}>{text.intro}</h1>
     <Header language={language} setLanguage={setLanguage} text={text}/> 
     <WhatsappButton/>
   </div>
  );
};

export default Navbar;
