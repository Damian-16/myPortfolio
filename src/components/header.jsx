import React, { useEffect, useState } from 'react'
import {  getStyles } from '../styles/styles'
import avatarImage from '../assets/img/avatar.jpg';
import { DynamicButton } from '../styles/dynamicButton';
import cover from '../assets/img/coverAbout.png';



const Header = ({language,setLanguage,text}) => {
 
 
  
  const styles = getStyles()
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 880);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 880);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize ', handleResize);
    };
  }, []);
   
    
  return (
    <header style={styles.header}>
     <styles.Container>
     <styles.ImageBackground></styles.ImageBackground>
     
      <div style={{ ...styles.about, ...(isMobile && styles.aboutMobile) }}>
        <div style={styles.avatar}>
        <img style={styles.avatarStyle} src={avatarImage} alt='profile' />
        </div>
        <styles.aboutText>
         {text.aboutText}
        </styles.aboutText>
        </div>
       
     </styles.Container>
    
          
    </header>
  )
}

export default Header