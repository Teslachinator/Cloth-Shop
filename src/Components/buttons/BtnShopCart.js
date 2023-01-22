import React from "react";
import styled from "styled-components";
import { Btn } from "./BtnCatalog";

const BtnAdd = styled.div`
  display: flex;
  gap: 30px;
`;

const BtnAddShopCart = styled(Btn)`
  width: 284px;
  height: 85px;
  font-size: 24px;
  line-height: 29px;
`;

const BtnAddFavourites = styled(Btn)`
  width: 101px;
  height: 85px;
`;

const BtnShopCart = () => {
  return (
    <BtnAdd>
      <BtnAddShopCart>Добавить в корзину</BtnAddShopCart>
      <BtnAddFavourites>
        <svg
          width="32"
          height="28"
          viewBox="0 0 32 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7055 26.5976L16.5492 26.7506L16.7055 26.5976ZM26.0885 15.7844L16.1084 25.9846L3.67045 13.2724C2.38592 11.9596 1.74695 10.2465 1.74695 8.50647C1.74695 6.76457 2.38711 5.03571 3.66945 3.72455C6.23307 1.1202 10.3716 1.11981 12.9356 3.72339L15.3746 6.23311C15.5625 6.42644 15.8205 6.53572 16.0901 6.53618C16.3597 6.53663 16.618 6.42823 16.8066 6.23554L19.2624 3.72554C19.2627 3.72521 19.2631 3.72488 19.2634 3.72455C21.8277 1.11948 25.9512 1.11981 28.5151 3.72554L28.5151 3.72556L28.5209 3.73143C29.8313 5.04122 30.4698 6.74958 30.4698 8.50647C30.4698 10.2307 29.8301 11.9604 28.5463 13.2724L26.0885 15.7844Z"
            fill="white"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </BtnAddFavourites>
    </BtnAdd>
  );
};

export default BtnShopCart;
