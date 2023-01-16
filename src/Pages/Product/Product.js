import React from "react";
import { Wrapper } from "../Catalog/Catalog";

const Product = () => {
  return (
    <Wrapper>
      <div className="productPhotos"></div>
      <div className="productInfo">
        <h4>{name}</h4>
        <div className="productPrice">
          {sale ? price : undefined}
          {sale ? sale : price} ₽
        </div>
      </div>
    </Wrapper>
  );
};

export default Product;
