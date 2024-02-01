import React from 'react'
import styles from './Nav.module.css'

const navMenu = [
    "Stock",
    "Video Templates",
    "Music",
    "Sound Effects",
    "Graphic Templates",
    "Graphics",
    "Presentation Templates",
    "Photos",
    "Fonts",
    "Add-ons",
    "More"
]

const Nav = () => {
  return (
    <nav className={styles.nav}>
        <ul className={styles.menu}>
            {navMenu.map((item, index) => (
                <li key={index}>{item}</li>
            ))
            }
        </ul>
    </nav>
  )
}

export default Nav