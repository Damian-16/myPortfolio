import React from 'react'
import { getStyles } from '../styles/styles'
import avatarImage from '../assets/img/avatar.jpg';


const Header = () => {
    const styles = getStyles()
    
  return (
    <header style={styles.header}>
      <img style={styles.cover}src={`https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550_1280.jpg`} alt="image"></img>
      <div style={styles.about}>
        <img style={styles.avatar} src={avatarImage} alt='profile' />
        <p>
          Hello, my name is Damian Pinedo Morganti and I am a software engineer with over 2+ years of
        </p>
        <div style={styles.contentButtons}>
          <button>buton</button>
          <button>buton</button>
        </div>
        </div>    
    </header>
  )
}

export default Header