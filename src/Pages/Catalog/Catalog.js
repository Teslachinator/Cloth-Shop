import React from "react";
import styled from "styled-components";
import CatalogCard from "./CatalogCard";
import { catalogSweatersTab } from "./catalogTab";

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 103px auto;
`;

const CatalogSweaters = styled.div`
  text-align: start;
  font-weight: 500;
  font-size: 52px;
  line-height: 63px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 101px;
`;

const CatalogSortTab = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 33px;
`;

const Catalog = () => {
  return (
    <Wrapper>
      <CatalogSweaters>свитеры</CatalogSweaters>
      <CatalogSortTab>
        {catalogSweatersTab.map((p, index) => {
          return (
            <CatalogCard
              sale={p.sale}
              image={p.image}
              price={p.price}
              name={p.name}
              key={p.id}
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
