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
      <nav
        style={{
          ...styles.navbar,
          background: darkMode
            ? "linear-gradient(to right, #12e55b, #10e351, #10e246, #11e03a, #14de2c, #19d233, #1ec737, #22bb3b, #2ea247, #388a4d, #40724e, #46594c)"
            : "linear-gradient(to right top, #6bd1bf, #5dd4bc, #4fd7b8, #40dab2, #2fddac, #2ae1b0, #23e4b4, #1be8b8, #29edc8, #3af2d7, #4cf7e4, #5ffbf1)",
        }}
      >
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={styles.headerTitle}>{text.intro}</h1>{" "}
        <DarkModeSwitch
          style={{ marginTop: "8%" }}
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
