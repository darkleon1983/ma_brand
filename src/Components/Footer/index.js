import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}><a href="#">агентство ma brand 2022</a></div>
      <div className={styles.item}><a href="#">vkontakte</a></div>
      <div className={styles.item}><a href="#">instagram (запрещен на территории рф)</a></div>
      <div className={styles.item}><a href="#header">наверх</a></div>
    </div>
  );
}

export default Footer;