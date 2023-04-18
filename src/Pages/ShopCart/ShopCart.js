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

export const BtnGoPay = styled(Btn)`
  cursor: pointer;
  max-width: ${(props) => props.width || "367px"};
  width: 100%;
  height: 75px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

const ShopCart = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const amount = useSelector((state) => state.cart.amount);
  const firstPrice = calcFirstPrice(items);
  const totalAmount = amount;
  const totalPrice = calcTotalPrice(items);
  const DILIVERY = firstPrice ? 600 : 0;

  const totalSale = calcTotalSale(items);

  return (
    <Wrapper>
      <div className="shopCart">
        <div className="cartItems">
          <p className="shopCart_title">Корзина</p>
          {items < 1 ? (
            <div>Корзина пуста</div>
          ) : (
            items.map((item) => <ShopCartCard key={item.id} item={item} />)
          )}
        </div>
        <div className="cartResult">
          <p className="shopCart_title">Итого</p>
          <div className="cartCalculate">
            <div className="cartCalculate_price">
              <p>Стоимость товара</p>
              <p>{firstPrice} ₽</p>
            </div>
            <div className="cartCalculate_price">
              <p>Количество товаров</p>
              <p>{totalAmount}</p>
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
              <p>{totalPrice * amount + DILIVERY} ₽</p>
            </div>
            <BtnGoPay className="btn_b">Перейти к оформлению</BtnGoPay>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ShopCart;
