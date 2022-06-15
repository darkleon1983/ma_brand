import React from "react";
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list} id="header">
        <div className={styles.item}><a href="#">Проекты</a></div>
        <div className={styles.item}><a href="#">О, MAB</a></div>
        <div className={styles.item}><a href="#">Контакты</a></div>
        <div className={styles.item}><a href="#">Магазин</a></div>
      </ul>
    </div>
  );
}

export default Header;