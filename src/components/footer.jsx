import React from "react";
import { getStyles } from "../styles/styles";

const Footer = ({text}) => {
  const styles = getStyles();
  return (
    <div id="contact">
      <h1>{text.title2}</h1>

      <div style={styles.iconsWorks}>
        <img
          src={
            "https://icon-library.com/images/linkedin-icon-no-background/linkedin-icon-no-background-8.jpg"
          }
          alt={"lnkdnIcon"}
          style={styles.icons}
        ></img>

        <img
          src={
            "https://icon-library.com/images/contribute-icon/contribute-icon-1.jpg"
          }
          alt={"ctIcon"}
          style={styles.icons}
        ></img>

        <img
          src={""}
          alt={"ctIcon"}
          style={styles.icons}
        ></img>
      </div>
      <p>Copyright ©{new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
