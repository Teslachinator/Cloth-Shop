import React from "react";
import "./favourites.css";
import { useDispatch, useSelector } from "react-redux";
import CatalogCard from "../Catalog/CatalogCard";
import { Wrapper } from "../Catalog/Catalog";
import { deleteFavoritesItem } from "../../redux/reducers/shopReducer";

const Favourites = () => {
  const dispatch = useDispatch();
  const favourItem = useSelector((state) => state.cart.favoritesItem);
  return (
    <div className="favourite">
      <div className="favourite__title">
        <p>Избранное</p>
        <button onClick={() => dispatch(deleteFavoritesItem())}>
          Очистить избранное
        </button>
      </div>
      <div className="favourite__items ">
        {favourItem < 1 ? (
          <div className="favourite__items_empty">
            <p>
              В избранном нет товаров. Вам могут понравиться товары в категории
              Аксессуары
            </p>
          </div>
        ) : (
          favourItem.map((p) => {
            return <CatalogCard key={p.id} item={p} />;
          })
        )}
      </div>
    </div>
  );
};

export default Favourites;
