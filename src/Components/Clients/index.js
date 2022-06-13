import React from "react";
import styles from './Clients.module.css';
import ClientSvg from "./ClientSvg/index.js";

const Clients = (props) => {
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.heading}>Услуги</h2>
      </div>
      <div className={styles.list}>
        <div className={styles.item}><ClientSvg source='img/neoTran.svg' /></div>
        <div className={styles.item}><ClientSvg source='img/cvetMet.svg' /></div>
        <div className={styles.item}><ClientSvg source='img/polus.svg' /></div>
        <div className={styles.item}><ClientSvg source='img/mazda.svg' /></div>
        <div className={styles.item}><ClientSvg source='img/sibup.svg' /></div>
        <div className={styles.item}><ClientSvg source='img/abricos.svg' /></div>
      </div>
    </div>
  );
}

export default Clients;