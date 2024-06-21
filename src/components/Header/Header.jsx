// Header component
import React from "react";
import styles from "./Header.module.css"; // Import CSS for styling
import headerImage from "../../assets/Images/Header.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={headerImage} alt="Header" className={styles.headerImage} />
    </header>
  );
};

export default Header;
