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
  display: flex;
  justify-content: space-between;
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
            />
          );
        })}
      </CatalogSortTab>
    </Wrapper>
  );
};

export default Catalog;
