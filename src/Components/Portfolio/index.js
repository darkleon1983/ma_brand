import React from "react";
import styles from './Portfolio.module.css';
import GaleryItem from "./GaleryItem";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <GaleryItem 
        text='boom'
        source='img/alma.png'
      />
      <GaleryItem 
        text='boom'
        source='img/cvetMet.png'
      />
      <GaleryItem 
        text='boom'
        source='img/esh.png'
      />
      <GaleryItem 
        text='boom'
        source='img/mazda.png'
      />
    </div>
  );
}
export default Portfolio;