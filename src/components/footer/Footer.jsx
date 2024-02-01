import React from 'react'
import styles from './Footer.module.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerTop}>
            <div>
                <p>Follow Us</p>
                <YouTubeIcon/>
                <TwitterIcon/>
                <FacebookIcon/>
            </div>
        </div>
        <div className={styles.footerMid}>

        </div>
        <div className={styles.footerBottom}>

        </div>
    </footer>
  )
}

export default Footer