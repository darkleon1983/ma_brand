import React from "react";
import styles from './Portfolio.module.css';
import GaleryItem from "./GaleryItem";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <GaleryItem 
        text='альма косметикс'
        source='img/alma.png'
      />
      <GaleryItem 
        text='мц маршал'
        source='img/mazda.png'
      />
      <GaleryItem 
        text='красцветмет'
        source='img/cvetMet.png'
      />
      <GaleryItem 
        text='ЭнергоСтройХолдинг'
        source='img/esh.png'
      />
      
    </div>
  );
}
export default Portfolio;