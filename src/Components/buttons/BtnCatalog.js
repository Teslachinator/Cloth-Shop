import React from "react";
import arrow from "./../../img/svg/ArrowL.svg";
import styled from "styled-components";

export const Btn = styled.button`
  padding: 10px;
  display: flex;
  font-weight: 600;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: #fec2c2;
  box-shadow: 5px -5px 0 0 black;
`;

const BtnGoCatalog = styled(Btn)`
  width: 194px;
  height: 40px;
  font-size: 20px;
  line-height: 24px;
`;

const Img = styled.img`
  padding: 0 auto;
  max-width: 74px;
  width: 100%;
  max-height: 16px;
`;

const BtnCatalog = () => {
  return (
    <BtnGoCatalog href="#">
      <p>Каталог</p>

      <Img src={arrow} alt="#" />
    </BtnGoCatalog>
  );
};

export default BtnCatalog;
