import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  max-height: 506px;
  text-align: start;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

const CardImg = styled.img`
  width: 360px;
  height: 360px;
`;

const CardName = styled(Card)`
  width: 70%;
  margin: 18px 0;
`;

const CardSalePrice = styled(Card)`
  text-decoration: line-through;
  color: #989898;
`;
const CardPrice = styled(Card)`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const CatalogCard = ({ image, name, sale, price }) => {
  // if (sale === 0) {
  //   CardSalePrice = styled.div`
  //     display: none;
  //   `;
  // }
  return (
    <Card>
      <CardImg src={image} alt="@" />
      <CardName>{name}</CardName>
      <CardPrice>
        <CardSalePrice>{sale ? price : undefined}</CardSalePrice>
        {sale ? sale : price} ₽
      </CardPrice>
    </Card>
  );
};

export default CatalogCard;
