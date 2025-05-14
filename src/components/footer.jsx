import React, { useRef, useState } from "react";
import { getStyles } from "../styles/styles";
import { linksRedirect } from "../utils/constants";
import emailjs from '@emailjs/browser';
import { publicKey, serviceID, templateID } from "../privateNumber";
import { toast } from "react-hot-toast";

const Footer = ({text, darkMode}) => {
    const [inputValues, setInputValues] = useState({
    user_name: '',
    user_email: '',
    user_message: '',
  });
  const styles = getStyles();
  const sendMail = (params) => {
    
    window.location.href = params === 'g'?'mailto:damianmorganti16@gmail.com':'mailto:DamianMorganti16@hotmail.com'

  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
   
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        toast.success(text.toastMail)
        console.log("mesjenviado")
      }, (error) => {
          
          toast.error(text.toastMailErr);
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
            "https://cdn-icons-png.flaticon.com/512/733/733579.png?w=740&t=st=1691007972~exp=1691008572~hmac=5b21e0dd1bf0935f7e2d6c2578d17e695f0d8096e8ac7d67aafc451b821259ff"
          }
          alt={"twitIcon"}
          style={styles.icons}
          onClick={()=>linksRedirect('https://twitter.com/DamianMorganti4')}
        ></img>

</div>
<form style={{display:'flex',justifyContent: 'center',flexDirection: 'column',margin:10}} ref={form} onSubmit={sendEmail}>
      <label>{text.message[0]}</label>
     {darkMode ? <styles.NeonInput type="text" name="user_name"  required  /> : <input class="input-custom"  type='text' name="user_name" required />   }
      <label>{text.message[1]}</label>
      {darkMode ? <styles.NeonInput type="email" name="user_email"  required /> : <input class="input-custom" type='text' name="user_name" required />}
      <label>{text.message[2]}</label>
      {darkMode ? <styles.NeonTextarea name="message" required /> :  <textarea class='textarea-custom' type='text' name="user_name" required /> }
      <button style={{marginTop:10}} type="submit">{text.message[3]}</button>
    </form>
      
      <p>Copyright © Website created by Damian Pinedo Morganti{new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
