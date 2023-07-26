import React, { useEffect, useState } from 'react'
import {  getStyles } from '../styles/styles'
import avatarImage from '../assets/img/avatar.jpg';
import { DynamicButton } from '../styles/dynamicButton';



const Header = ({language,setLanguage,text}) => {
 
  //  const [language, setLanguage] = useState()
  
  const styles = getStyles()
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 880);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 880);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
   
    
  return (
    <header style={styles.header}>
      <img style={styles.cover}src={`src/assets/img/cover.gif`} alt="image"></img>
      <div style={{ ...styles.about, ...(isMobile && styles.aboutMobile) }}>
        <img style={styles.avatar} src={avatarImage} alt='profile' />
        <styles.aboutText>
         {text.aboutText}
        </styles.aboutText>
        <div style={styles.contentButtons}>
          <DynamicButton onClick={()=>setLanguage(!language)}>
            <span className="dblFirst"></span>
            <span className='dblSecond'></span>
            <span className='dblThird'></span>
            <span className='dblFourth'></span>
            {text.changeLng}</DynamicButton>
         
        </div>
        </div>    
    </header>
  )
}

export default Header