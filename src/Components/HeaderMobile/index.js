import React, { useState } from "react";
import styles from './HeaderMobile.module.css';

const OpenButton = () => {
  return (
    <svg width="33" height="20" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="33" height="3.83721" fill="black" />
      <rect y="7.67383" width="33" height="3.83721" fill="black" />
      <rect y="15.3496" width="33" height="3.83721" fill="black" />
    </svg>
  );
}
const CloseButton = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="-1 -1 11 11" version="1.1">
      <path fill="#5f6368" stroke="#5f6368" stroke-linecap="round" stroke-width="1.5"
        d="m0 0 9,9 M0 9 9,0" />
    </svg>
  );
}

const MenuButton = (props) => {
  console.log(props.isActive);
  if (props.isActive) {
    return (
      <CloseButton />
    );
  } else {
    return (
      <OpenButton />
    );
  }
}

const HeaderMobile = () => {

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  }

  return (
    <div className={styles.container} id="mobileHeader">
      <ul className={`${styles.list} ${isActive ? null : styles.invisible}`}>
        <li className={styles.mobileItem}>Проекты</li>
        <li className={styles.mobileItem}>О, MAB</li>
        <li className={styles.mobileItem}>Контакты</li>
        <li className={styles.mobileItem}>Магазин</li>
      </ul>
      <div className={styles.mobileButton} onClick={toggleClass}>
        <MenuButton isActive={isActive} />
      </div>
    </div>
  );
}

export default HeaderMobile;