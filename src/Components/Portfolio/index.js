import React from "react";
import styles from './Portfolio.module.css';
import GaleryItem from "./GaleryItem";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <GaleryItem 
        text="the fuck"
        image="./../../img/alma.png"
      />
    </div>
  );
}
export default Portfolio;