import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BtnAddShopCart from "../../../Components/buttons/BtnAddShopCart";
import { catalogSweatersTab } from "../catalogTab";
import {
  setFavoritesItem,
  setItemInCart,
} from "../../../redux/reducers/shopReducer";
import { BtnGoPay } from "../../ShopCart/ShopCart";
import heart from "./../../../img/svg/HeartItem.svg";
import { Wrapper } from "../Catalog";
import "./catalogItem.css";

const CatalogItem = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.currentItem);
  if (!item) return null;
  const selectItem = catalogSweatersTab.some((items) => items.id === item.id);

  const handleClick = () => {
    dispatch(setItemInCart(item));
  };
  return (
    <Wrapper>
      <section className="item">
        {!item.additImage1 ? (
          <img className="item__img_main" src={item.image} alt="#" />
        ) : (
          <div className="item__img">
            <img src={item.additImage5} alt="#" />
            <img src={item.additImage1} alt="#" />
            <img src={item.additImage2} alt="#" />
            <img src={item.additImage3} alt="#" />
          </div>
        )}
        <div className="item__title">
          <h2>{item.name}</h2>
          <div className="item__price">
            <p className={item.sale === 0 ? "hidden" : "cardSale cardPrice"}>
              {item.price}
            </p>
            <p>{item.sale ? item.sale : item.price} ₽</p>
          </div>
          <div className="item__btns">
            <BtnGoPay
              width="284px"
              type={selectItem ? "add" : "delete"}
              onClick={handleClick}
            >
              Добавить в корзину
            </BtnGoPay>
            <BtnGoPay
              width="101px"
              onClick={() => dispatch(setFavoritesItem(item))}
            >
              <img src={heart} alt="#"></img>
            </BtnGoPay>
          </div>
          <div className="item__info">
            <p>{item.composition}</p>
            <p>{item.category}</p>
            <p>{item.category}</p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default CatalogItem;
