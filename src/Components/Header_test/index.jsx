import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AboutUs from "../AboutUs/index";
import "./../../App.css";

export const Header_test = (props) => {
  return (
    <div className="text-yellow-500 text-right">
      <ul className="text-yellow-500" id="header">
        <Link to="/projects">Проекты</Link>
        <Link to="/about">О, MAB</Link>
        <Link to="/projects">Контакты</Link>
        <Link to="/projects">Магазин</Link>
        <Link to="">Home</Link>
      </ul>
    </div>
  );
};
