import React from "react";
import styles from './Projects.module.css';
import { Routes, Route } from "react-router";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1>Our projects</h1>
      <Routes>
      <Route path="/projects" element={<Projects />}/>
        {/* <Route path="/about" element={<AboutUs />}/> */}
        {/* <Route path="/contacts" element={<Contacts />}/>
        <Route path="/mabstore" element={<MABStore />}/> */}
      </Routes>
    </div>
  );
}

export default Projects;