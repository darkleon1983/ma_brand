import React from "react";
import styles from './Promo.module.css';

const Promo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>MA BRAND</div>
      <div className={styles.description}>коммуникационное агентство полного цикла</div>
      <div className={styles.slogan}>диалог бизнеса с клиентом под ключ</div>
    </div>
  );
}

export default Promo;