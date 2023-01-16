import React from "react";
import "./favourites.css";

const Favourites = () => {
  return (
    <div className="favourite">
      <div className="favourite_title">
        <p>Избранное</p>
        <button>Очистить избранное</button>
      </div>
      <div className="zeroLikes">
        <p>
          В избранном нет товаров. Вам могут понравиться товары в категории
          Аксессуары
        </p>
      </div>
    </div>
  );
};

export default Favourites;
