import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styles from './Header.module.css';
import AboutUs from './../AboutUs/index';

const Header = (props) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list} id="header">
        <Link to='/projects'>Проекты</Link>
        <Link to='/about'>О, MAB</Link>
        <Link to='/projects'>Контакты</Link>
        <Link to='/projects'>Магазин</Link>
        <Link to=''>Home</Link>
      </ul>
    </div>
  );
}

export default Header;