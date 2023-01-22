import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const activeLink = "active-head",
    normalLink = "head";
  return (
    <header>
      <nav>
        <ul className="header">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Каталог
            </NavLink>
          </li>
          <li className="header_logo">
            <NavLink to="/" className="header_logo">
              _crochagstore
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Избранное
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Корзина
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
