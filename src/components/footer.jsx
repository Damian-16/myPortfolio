import React, { useRef } from "react";
import { getStyles } from "../styles/styles";
import { linksRedirect } from "../utils/constants";
import emailjs from '@emailjs/browser';
import { publicKey, serviceID, templateID } from "../privateNumber";

const Footer = ({text}) => {
  const styles = getStyles();
  const sendMail = (params) => {
    
    window.location.href = params === 'g'?'mailto:damianmorganti16@gmail.com':'mailto:DamianMorganti16@hotmail.com'

  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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

<form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button type="submit">Enviar</button>
    </form>
      </div>
      <p>Copyright © Website created by Damian Pinedo Morganti{new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
