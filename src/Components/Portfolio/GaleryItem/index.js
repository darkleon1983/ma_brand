import React from "react";
import styles from './GaleryItem.module.css';

const GaleryItem = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img alt='image' src={props.source} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.slogan}>дизайн-продакшн-стратегия  2021</div>
      <div className={styles.partnerName}>
        {props.text}
      </div>
    </div>
  );
}

export default GaleryItem;