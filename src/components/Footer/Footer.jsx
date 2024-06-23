// Footer component
import React from "react";
import styles from "./Footer.module.css"; // Import CSS for styling
import footerImage from '../../assets/Images/Footer.png'; // Import function to get image URL

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img
        src={footerImage}
        alt="Footer"
        className={styles.footerImage}
      />
    </div>
  );
};

export default Footer;
