import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const activeLink = "active-head",
    normalLink = "head";
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <ul className="container-fluid contain">
          <li className="nav-item">
            <NavLink
              to="/Cloth-Shop"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Главная
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/catalog"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Каталог
            </NavLink>
          </li>
          <li className="header_logo nav-item">
            <NavLink to="/Cloth-Shop" className="header_logo">
              _crochagstore
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/favorites"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Избранное
            </NavLink>
          </li>
          <li className="nav-item">
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
