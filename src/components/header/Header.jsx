import React from 'react'
import styles from "./Header.module.css";
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoImg}>
          <SettingsIcon/>
        </div>
        <p className={styles.logoText}>ZinTools</p>
      </div>
      <div className={styles.search}>
        <input type="search" name="search" id="search" placeholder='Search for Movies, TV Shows, Themes & Cast'/>
        <div className={styles.searchIcon}>
          <SearchIcon/>
        </div>
      </div>
      <div  className={styles.buttons}>
        <button>Log in</button>
        <button>Sign Up</button>
      </div>
    </header>
  )
}

export default Header