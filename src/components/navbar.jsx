import React from "react";
import { getStyles } from "../styles/styles";
import Header from "./header";
import { WhatsappButton } from "../styles/whattsupButton";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Navbar = ({ language, setLanguage, text, darkMode, toggleDarkMode }) => {
  const styles = getStyles();
  const handleToggleDarkMode = () => {
    toggleDarkMode();
  };
  
  return (
    <div>
      <nav style={styles.navbar}>
        <ul style={styles.navbarList}>
          <li style={styles.navbarItem}>
            <a href="/">{text.init}</a>
          </li>
          <li style={styles.navbarItem}>
            <a href="#portfolio">{text.title}</a>
          </li>
          <li style={styles.navbarItem}>
            <a href="#contact">{text.title2}</a>
          </li>
        </ul>
      </nav>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <h1 style={styles.headerTitle}>{text.intro}</h1>{" "}
      <DarkModeSwitch
        style={{marginTop:'8%'}}
        checked={darkMode}
        onChange={handleToggleDarkMode}
        size={90}
      />
      </div>
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        language={language}
        setLanguage={setLanguage}
        text={text}
      />
      <WhatsappButton />
    </div>
  );
};

export default Navbar;
