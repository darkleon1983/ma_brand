import React from "react";
import styles from './Collaboration.module.css';

const Collaboration = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Сотрудничество</h2>
      </div>
      <div className={styles.itemList}>
        <div className={styles.item}>
          <p className={styles.description}>Мы открыты для сотрудничества и инетересных идей. Свяжитесь с нами любым удобным вам способом.</p>
        </div>
        <div className={styles.item}>
          <p className={styles.cities}>красноярск</p>
          <p className={styles.cities}>берлин</p>
        </div>
        <div className={styles.item}>
          <div className={styles.contacts}><a href="tel:+79135383819">+7-913-538-38-19</a></div>
          <div className={styles.contacts}><a href="mailto:INFO@MA-BRAND.RU">INFO@MA-BRAND.RU</a></div>
        </div>
        <div className={styles.box}>
        <div className={styles.anchor}>
          <a href="#">свяжитесь с нами</a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Collaboration;