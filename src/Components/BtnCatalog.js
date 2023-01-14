import React from "react";
import arrow from "./../img/svg/ArrowL.svg";
import styled from "styled-components";

const Btn = styled.a`
  font-size: 20px;
  line-height: 24px;
  padding: 10px;
  display: flex;
  width: 194px;
  height: 40px;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: #fec2c2;
  box-shadow: 5px -5px 0 0 black;
`;

const Img = styled.img`
  width: 74px;
  height: 16px;
`;

const BtnCatalog = () => {
  return (
    <Btn href="#">
      <p>Каталог</p>

      <Img src={arrow} alt="" />
    </Btn>
  );
};

export default BtnCatalog;
