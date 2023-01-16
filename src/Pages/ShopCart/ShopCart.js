import React from "react";
import styled from "styled-components";
import { Btn } from "../../Components/BtnCatalog";

const BtnGoPay = styled(Btn)`
  width: 375px;
  height: 85px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

const ShopCart = () => {
  return (
    <div>
      <div className="shopCart">
        <p>Корзина</p>
      </div>
      <div className="cartResult">
        <p>Итого</p>
        <div className="cartCalculate">
          <div className="cartCalculate_cost">
            <p>Стоимость товара</p>
            <p>844 ₽</p>
          </div>
          <div className="cartCalculate_dilivery">
            <p>Доставка</p>
            <p>454 ₽</p>
          </div>
          <div className="cartCalculate_sale">
            <p>Скидка</p>
            <p> - ₽</p>
          </div>
          <div className="cartCalculate_all">
            <p>Всего</p>
            <p>8456 ₽</p>
          </div>
        </div>
        <BtnGoPay>Перейти к оформлению</BtnGoPay>
      </div>
    </div>
  );
};

export default ShopCart;
