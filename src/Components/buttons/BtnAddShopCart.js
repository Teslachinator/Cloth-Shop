import React from "react";
import styled from "styled-components";
import shopCart from "./../../img/svg/ShopCart.svg";

const BtnAddShopCartStyle = styled.div`
  width: 4rem;
`;

const BtnAddShopCart = ({ onClick }) => {
  return (
    <BtnAddShopCartStyle>
      <button onClick={onClick}>
        <img src={shopCart} alt="#" />
      </button>
    </BtnAddShopCartStyle>
  );
};

export default BtnAddShopCart;
