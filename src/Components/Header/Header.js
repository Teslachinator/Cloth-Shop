import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <ul className="header">
        <li className="active-head">Главная</li>
        <li>Каталог</li>
        <li className="header_logo">_crochagstore</li>
        <li>Избранное</li>
        <li>Корзина</li>
      </ul>
    </header>
  );
};

export default Header;
