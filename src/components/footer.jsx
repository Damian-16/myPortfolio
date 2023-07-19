import React from "react";
import { getStyles } from "../styles/styles";
import { linksRedirect } from "../utils/constants";

const Footer = ({text}) => {
  const styles = getStyles();
  const sendMail = (params) => {
    
    window.location.href = params === 'g'?'mailto:damianmorganti16@gmail.com':'mailto:DamianMorganti16@hotmail.com'

  };
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
          onClick={()=>linksRedirect('https://www.linkedin.com/in/damian-pinedo-morganti/')}
        ></img>

        <img
          src={
            "https://icon-library.com/images/download-gmail-icon/download-gmail-icon-26.jpg"
          }
          alt={"gmailIcon"}
          style={styles.icons}
          onClick={()=>sendMail('g')}
        ></img>

        <img
          src={"https://icon-library.com/images/free-e-mail-icon/free-e-mail-icon-7.jpg"}
          alt={"mailIcon"}
          style={styles.icons}
          onClick={()=>sendMail('m')}
        ></img>
      </div>
      <p>Copyright © Website created by Damian Pinedo Morganti{new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
