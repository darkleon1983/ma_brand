import React from "react";
import styles from './ClientSvg.module.css';

const ClientSvg = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={props.source} />
      </div>
    </div>
  );
}

export default ClientSvg;