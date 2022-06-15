import React from "react";
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <div className={styles.container} style={props.width}>
      <div className={styles.anchor} >
        <a href="#">{props.text}</a>
      </div>
    </div>
  );
}

export default Button;

// style={{width: 100}}
// style={props.width}