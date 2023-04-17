import React from "react";
import styled from "styled-components";
import CatalogCard from "./CatalogCard";
import { catalogSweatersTab } from "./catalogTab";
import addShopCart from "./../../img/svg/addShopCart.svg";

export const Wrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  padding: 10px;
  margin: 103px auto;
`;

const CatalogSweaters = styled.div`
  text-align: start;
  font-weight: 500;
  font-size: calc(30px + 2vw);
  line-height: 63px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin: 0;
`;

const CatalogSortTab = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: center;

  gap: 33px;
`;

const Catalog = () => {
  return (
    <Wrapper className="container">
      <CatalogSweaters>свитеры</CatalogSweaters>
      <CatalogSortTab className="row">
        {catalogSweatersTab.map((p, index) => {
          return (
            <CatalogCard
              key={index}
              sale={p.sale}
              image={p.image}
              price={p.price}
              name={p.name}
              id={p.id}
              category={p.category}
              size={p.size}
              amount={p.amount}
            />
          );
        })}
      </CatalogSortTab>
    </Wrapper>
  );
};

export default Catalog;
