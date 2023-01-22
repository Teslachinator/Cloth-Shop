import React, { useEffect, useState } from "react";
import "./catalog.css";

import BtnAddShopCart from "../../Components/buttons/BtnAddShopCart";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";

const CatalogCard = ({ image, name, sale, price, category, amount, size }) => {
  const [cardSale, setcardSale] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (sale === 0) {
      setcardSale("hidden");
    } else {
      setcardSale("cardSale cardPrice");
    }
  }, []);

  const handleClick = (event) => {
    event.stopPropagation();
    dispatch(
      setItemInCart({ image, name, sale, price, size, category, amount })
    );
  };

  return (
    <div className="card">
      <img className="cardImg" src={image} alt="@" />
      <div className="cardName">{name}</div>
      <div className="cardBlockPrice">
        <div className="cardBlockPrice price">
          <div className={cardSale}>{price}</div>
          <div className="cardPrice ">{sale ? sale : price} ₽</div>
        </div>
        <BtnAddShopCart onClick={handleClick} />
      </div>
    </div>
  );
};

export default CatalogCard;
