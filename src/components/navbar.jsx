import React from "react";
import {  getStyles } from "../styles/styles";
import Header from "./header";
import { WhatsappButton } from "../styles/whattsupButton";



const Navbar = () => {
    const styles = getStyles();
  return (
    <div>
    <nav style={styles.navbar}>
      <ul style={styles.navbarList}>
        <li style={styles.navbarItem}>
          <a href="/">Inicio</a>
        </li>
        <li style={styles.navbarItem}>
          <a href="#portfolio">Portafolio</a>
        </li>
        <li style={styles.navbarItem}>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
    <h1>HEY THERE !!!</h1>
     <Header/> 
     <WhatsappButton/>
   </div>
  );
};

export default Navbar;
