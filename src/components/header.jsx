import React, { useState } from 'react'
import {  getStyles } from '../styles/styles'
import avatarImage from '../assets/img/avatar.jpg';



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
          <button onClick={()=>setLanguage(!language)}>buton</button>
         
        </div>
        </div>    
    </header>
  )
}

export default Header