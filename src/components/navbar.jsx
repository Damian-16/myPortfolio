import React from "react";
import { getStyles } from "../styles/styles";
import Header from "./header";



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
          <a href="/productos">Productos</a>
        </li>
        <li style={styles.navbarItem}>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
     <Header >
     {/* Contenido del header */}
   </Header>
   </div>
  );
};

export default Navbar;
