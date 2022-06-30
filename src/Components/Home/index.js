import React from "react";
import Portfolio from "../Portfolio";
import Promo from "../Promo/index.js";
import Header from "../Header/index.js";
import AboutUs from "../AboutUs/index.js";
import Services from "../Services/index.js";
import Clients from "../Clients/index.js";
import Collaboration from "../Collaboration/index.js";
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      <Promo />
      <Portfolio />
      <AboutUs />
      <Services />
      <Clients />
      <Collaboration />
    </div>
  );
}

export default Home;