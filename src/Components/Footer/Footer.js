import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="footer row">
        <div className="footer__info">
          <p>Каталог</p>
          <ul>
            <li>Свитеры</li>
            <li>Аксессуары</li>
            <li>Кардиганы</li>
            <li>Акции</li>
          </ul>
        </div>
        <div className="footer__info">
          <p>Помощь покупателю</p>
          <ul>
            <li>Доставка и оплата</li>
            <li>Обмен и возврат</li>
            <li>Часто задаваемые вопросы</li>
            <li>Персональный заказ</li>
          </ul>
        </div>
        <div className="footer__info">
          <p>О НАС</p>
          <ul>
            <li>Контакты</li>
            <li>Сотрудничество</li>
            <li>Обратная связь</li>
            <li>social</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
