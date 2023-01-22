import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Btn } from "../../Components/buttons/BtnCatalog";
import ShopCartCard from "../../Components/shopCartCard/ShopCartCard";
import {
  calcFirstPrice,
  calcTotalPrice,
  calcTotalSale,
} from "../../Helpers/utils";
import { Wrapper } from "../Catalog/Catalog";
import "./shopCart.css";

const BtnGoPay = styled(Btn)`
  width: 367px;
  height: 75px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

const ShopCart = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const firstPrice = calcFirstPrice(items);
  const totalPrice = calcTotalPrice(items);
  const DILIVERY = firstPrice ? 600 : 0;

  const totalSale = calcTotalSale(items);

  return (
    <Wrapper>
      <div className="shopCart">
        <div className="cartItems">
          <p className="shopCart_title">Корзина</p>
          {items.map((item) => (
            <ShopCartCard item={item} />
          ))}
        </div>
        <div className="cartResult">
          <p className="shopCart_title">Итого</p>
          <div className="cartCalculate">
            <div className="cartCalculate_price">
              <p>Стоимость товара</p>
              <p>{firstPrice} ₽</p>
            </div>
            <div className="cartCalculate_price">
              <p>Доставка</p>
              <p>{DILIVERY} ₽</p>
            </div>
            <div className="cartCalculate_price">
              <p>Скидка</p>
              <p>- {totalSale} ₽</p>
            </div>
            <div className="cartCalculate_price total">
              <div>Всего</div>
              <p>{totalPrice + DILIVERY} ₽</p>
            </div>
            <BtnGoPay>Перейти к оформлению</BtnGoPay>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ShopCart;
