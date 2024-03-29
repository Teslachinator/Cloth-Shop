import React from "react";
import styled from "styled-components";
import addShopCart from "./../../img/svg/addShopCart.svg";
import deleteShopCart from "./../../img/svg/deleteShopCart.svg";

const BtnAddShopCartStyle = styled.div`
  width: 4rem;
`;

const BtnAddShopCart = (onClick) => {
  return (
    <BtnAddShopCartStyle className="btn_b">
      <button onClick={onClick}>
        <img src={addShopCart} alt="#" />
      </button>
    </BtnAddShopCartStyle>
  );
};

export default BtnAddShopCart;
