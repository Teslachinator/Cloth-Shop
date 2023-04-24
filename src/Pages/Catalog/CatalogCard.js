import React from "react";
import "./catalog.css";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentItem } from "../../redux/reducers/shopReducer";

const CatalogCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShopCart = () => {
    dispatch(setCurrentItem(item));
    navigate("/catalog/item", { replace: true });
  };

  return (
    <div className="cataplo__card" onClick={handleShopCart}>
      <img className="cardImg" src={item.image} alt="#" />
      <div className="cardName">{item.name}</div>
      <div className="cardBlockPrice">
        <div className="cardBlockPrice price">
          <div className={item.sale === 0 ? "hidden" : "cardSale cardPrice"}>
            {item.price}
          </div>
          <div className="cardPrice ">
            {item.sale ? item.sale : item.price} ₽
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
