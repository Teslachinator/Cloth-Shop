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
  const favourites = useSelector(
    (favourite) => favourite.cart.favoritesItem
  ).map((it) => it.id);
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
              className="btn_b"
              width="284px"
              type={selectItem ? "add" : "delete"}
              onClick={handleClick}
            >
              Добавить в корзину
            </BtnGoPay>
            <BtnGoPay
              className="btn_b"
              width="101px"
              onClick={() => dispatch(setFavoritesItem(item))}
            >
              <svg
                className={
                  favourites.some((items) => items === item.id)
                    ? "heartActive"
                    : "heart"
                }
                width="32"
                height="28"
                viewBox="0 0 32 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3746 6.23311C15.5625 6.42644 15.8205 6.53572 16.0901 6.53618C16.3597 6.53663 16.618 6.42823 16.8066 6.23554L19.2624 3.72554C19.2627 3.72524 19.263 3.72493 19.2633 3.72463C21.8276 1.11948 25.9511 1.11978 28.5151 3.72554L28.5151 3.72556L28.5209 3.73143C29.8313 5.04122 30.4698 6.74957 30.4698 8.50647C30.4698 10.2307 29.8301 11.9604 28.5463 13.2724L26.0885 15.7844L16.1084 25.9846L3.67045 13.2724C2.38592 11.9596 1.74695 10.2465 1.74695 8.50647C1.74695 6.76454 2.38714 5.03565 3.66953 3.72447C6.23315 1.1202 10.3716 1.11984 12.9356 3.72337L15.3746 6.23311Z"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>
            </BtnGoPay>
          </div>
          <div className="item__info">
            <p>{item.composition}</p>
            <p>{item.info}</p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default CatalogItem;
