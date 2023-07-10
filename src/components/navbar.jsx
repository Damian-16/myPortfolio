import React from "react";
import { getNavbarStyles } from "../styles/styles";


const Navbar = () => {
    const styles = getNavbarStyles();
  return (
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
  );
};

export default Navbar;
