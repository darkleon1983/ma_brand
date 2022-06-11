import React from "react";
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>О нас</h2>
      </div>
      <div className={styles.promo}>диалог под ключ</div>
      <div className={styles.description}>
        <div className={styles.paragraph}>
          <p>Мы — небольшая команда, любящих своё дело, специалистов, которая создаёт проекты для людей
            и брендов, в которые мы верим. Наш главный подход в работе — партнёрство. Как внутри команды, так и на проекте с клиентом.
            Ваш результат — наш результат. Сочетая стратегию, брендинг, продакшн и диджитал, мы создаём опыт, который трансформирует способ общения и взаимодействия людей с брендами.</p>
        </div>
        <div className={styles.box}>
          <div className={styles.anchor}>
            <a href="#">О MAB</a>
          </div>
        </div>
      </div>
      <div className={styles.photoContainer}>
        {/* <img src={'img/mazda.png'} /> */}
      </div>
    </div>
  );
}

export default AboutUs;