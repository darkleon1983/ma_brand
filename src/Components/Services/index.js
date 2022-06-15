import React from "react";
import styles from './Services.module.css';
import Button from "../Button/index.js";

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Услуги</h2>
      </div>
      <div className={styles.services}>
        <div className={styles.item}>
          <h3 className={styles.itemHeading}>разработка стратегий</h3>
          <p className={styles.description}>маркетинговые стратегии,
            визуальная стратегия smm-стратегия</p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.itemHeading}>айдентика</h3>
          <p className={styles.description}>нейминг,  фирменный стиль, проверка логотипов
            и названий, патентная поддержка, упаковка, интерьерные решения, коммерческая иллюстрация</p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.itemHeading}>диджитал и веб</h3>
          <p className={styles.description}>разработка лендингов, сайтов, e-mail-рассылок</p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.itemHeading}>мерч и стиль</h3>
          <p className={styles.description}>Разработка корпоративного мерча, корпоративного дресс-кода; сопровождение съемок</p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.itemHeading}>продакшн</h3>
          <p className={styles.description}>разработка концепций, продюсирование съемки, стилизация, фотосъемка, видеосъемка</p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.itemHeading}>smm</h3>
          <p className={styles.description}>VK, Instagram, ОК, контент-маркетинг, комплексное продвижение в соцсетях</p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.itemHeading}>petfomance-маркетинг</h3>
          <p className={styles.description}>воронки продаж, таргетированная реклама</p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.itemHeading}>консалтинг</h3>
          <p className={styles.description}>консультирование
            по маркетингу собственников бизнеса
            и smm-специалистов</p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.itemHeading}>pr</h3>
          <p className={styles.description}>influence-маркетинг, event,
            спецпроекты</p>
        </div>
      </div>
      <Button text='оставить заявку' width={{width: 340}} />
    </div>
  );
}

export default Services;