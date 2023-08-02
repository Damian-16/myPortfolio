import React from "react";
import { getStyles } from "../styles/styles";
import Header from "./header";
import { WhatsappButton } from "../styles/whattsupButton";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { DynamicButton } from "../styles/dynamicButton";

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
            : "#6fdcbf",
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
          <div style={styles.contentButtons}>
          <DynamicButton onClick={()=>setLanguage(!language)}>
            <span className="dblFirst"></span>
            <span className='dblSecond'></span>
            <span className='dblThird'></span>
            <span className='dblFourth'></span>
            {text.changeLng}</DynamicButton>
         
        </div>
        </ul>
      </nav>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <styles.titleHeader style={styles.headerTitle}>
          <span>{text.intro}</span>
          </styles.titleHeader>
        <DarkModeSwitch
          style={{ position:'fixed',right:20,bottom:'75%'}}
          checked={darkMode}
          onChange={handleToggleDarkMode}
          size={60}
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
