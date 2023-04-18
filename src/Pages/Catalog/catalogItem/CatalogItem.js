import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BtnAddShopCart from "../../../Components/buttons/BtnAddShopCart";
import { catalogSweatersTab } from "../catalogTab";
import { setItemInCart } from "../../../redux/reducers/shopReducer";
import { BtnGoPay } from "../../ShopCart/ShopCart";
import heart from "./../../../img/svg/HeartItem.svg";

const CatalogItem = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.currentItem);
  if (!item) return null;
  const selectItem = catalogSweatersTab.some((items) => items.id === item.id);

  const handleClick = () => {
    dispatch(setItemInCart(item));
  };
  return (
    <section>
      <div className="item__img">{item.image}</div>
      <div className="item__title">
        <h2>{item.name}</h2>
        <div className="item__price">
          <p className={item.sale === 0 ? "hidden" : "cardSale cardPrice"}>
            {item.price}
          </p>
          <p>{item.sale}</p>
        </div>
        <div className="item__btns">
          <BtnGoPay
            width="284px"
            type={selectItem ? "add" : "delete"}
            onClick={handleClick}
          >
            Добавить в корзину
          </BtnGoPay>
          <BtnGoPay width="101px">
            <img src={heart} alt="#"></img>
          </BtnGoPay>
          {/* <button>{item.category}</button>
          <button>{item.category}</button> */}
        </div>
        <div className="item__info">
          <p>{item.composition}</p>
          <p>{item.category}</p>
          <p>{item.category}</p>
        </div>
      </div>
    </section>
  );
};

export default CatalogItem;
