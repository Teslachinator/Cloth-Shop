import React, { useEffect, useState } from "react";
import "./catalog.css";

import BtnAddShopCart from "../../Components/buttons/BtnAddShopCart";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/reducers/shopReducer";
import { catalogSweatersTab } from "./catalogTab";
import {
  Link,
  useNavigate,
  NavLink,
  unstable_HistoryRouter,
} from "react-router-dom";
import { setCurrentItem } from "../../redux/reducers/shopReducer";

const CatalogCard = ({ item }) => {
  // const [cardSale, setcardSale] = useState();
  // const selectItem = catalogSweatersTab.some((items) => items.id === item.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShopCart = () => {
    dispatch(setCurrentItem(item));
    navigate("/catalog/item", { replace: true });
    console.log(item);
  };

  // const handleClick = (event) => {
  //   dispatch(setItemInCart({ item }));
  // };

  return (
    <div className="cataplo__card" onClick={handleShopCart}>
      {/* <Link to={`/catalog/${item.id}`}  */}
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
        {/* <BtnAddShopCart
          type={selectItem ? "add" : "delete"}
          onClick={handleClick}
        /> */}
      </div>
      {/* </Link> */}
    </div>
  );
};

export default CatalogCard;
