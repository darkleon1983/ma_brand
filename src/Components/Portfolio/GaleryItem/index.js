import React from "react";
import styles from './GaleryItem.module.css';

const GaleryItem = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={require('./../../img/alma.png')} />
      </div>
      <hr />
      <div>дизайн-продакшн-стратегия  2021</div>
      <div>
        {props.text}
      </div>
    </div>
  );
}

export default GaleryItem;