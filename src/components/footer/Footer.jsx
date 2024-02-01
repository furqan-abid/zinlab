import React from "react";
import styles from "./Footer.module.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";


const list = [
    "Privacy Policy",
    "Terms and Conditions",
    "Cookies Policy",
    "About Us",
    "EULA",
    "Contact",
  ];

  const footerLinks = [
    {
      heading: "Internal Links",
      list: ["Documentaries", "Themes", "Chrom Casts"],
    },
    {
      heading: "Enterprise",
      list: [
        "Download Chrome Browser",
        "Chrome Browser for Enterprise",
        "Chrome Browser Devices",
        "ChromeOS",
        "Google Cloud",
        "Google Workspace",
      ],
    },
    {
      heading: "Internal Links",
      list: ["Documentaries", "Themes", "Chrom Casts"],
    },
    {
      heading: "Enterprise",
      list: [
        "Download Chrome Browser",
        "Chrome Browser for Enterprise",
        "Chrome Browser Devices",
        "ChromeOS",
        "Google Cloud",
        "Google Workspace",
      ],
    },
    {
      heading: "Internal Links",
      list: ["Documentaries", "Themes", "Chrom Casts"],
    },
  ];

  
const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div>
          <p>Follow Us</p>
          <YouTubeIcon />
          <TwitterIcon />
          <FacebookIcon />
        </div>
      </div>
      <div className={styles.footerMid}>
        {footerLinks.map((fl, index) => (
          <div key={index} className={styles.linkContainer}>
            <h3>{fl.heading}</h3>
            <ul>
              {fl.list.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.content}>
          <p>
            Similar <span>Watch</span>
          </p>
          <ul>
            {list.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        </div>
        <div className={styles.moon}>
          <DarkModeOutlinedIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
