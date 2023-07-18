import React, { useState } from 'react'
import {  getStyles } from '../styles/styles'
import avatarImage from '../assets/img/avatar.jpg';
import { DynamicButton } from '../styles/dynamicButton';



const Header = ({language,setLanguage,text}) => {
 
  //  const [language, setLanguage] = useState()
  
    const styles = getStyles()
   
    
  return (
    <header style={styles.header}>
      <img style={styles.cover}src={`https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550_1280.jpg`} alt="image"></img>
      <div style={styles.about}>
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
            buton</DynamicButton>
         
        </div>
        </div>    
    </header>
  )
}

export default Header