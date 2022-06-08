import React from "react";
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <div><a href="#">Проекты</a></div>
        <div><a href="#">О, MAB</a></div>
        <div><a href="#">Контакты</a></div>
        <div><a href="#">Магазин</a></div>
      </ul>
    </div>
  );
}

export default Header;