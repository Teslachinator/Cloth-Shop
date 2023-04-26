import React from "react";
import "./shopCartCard.css";
// import heart from "./../../img/svg/Heart.svg";
import trash from "./../../img/svg/Trash.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemFromCart,
  setCurrentItem,
  setFavoritesItem,
} from "../../redux/reducers/shopReducer";
import { useNavigate } from "react-router-dom";
// .filter(
//   (items) => items.id === item.id
// );
const ShopCartCard = ({ item }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.cart.favoritesItem).map(
    (it) => it.id
  );
  console.log(favourites, item.id);
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    dispatch(deleteItemFromCart(item));
  };
  const navigate = useNavigate();

  const handleSetFavoritesItem = (e) => {
    e.stopPropagation();
    dispatch(setFavoritesItem(item));
  };
  const handleShopCart = () => {
    dispatch(setCurrentItem(item));
    navigate("/catalog/item", { replace: false });
  };

  return (
    <>
      <div className="shopCartCard point" onClick={handleShopCart}>
        <div>
          <img className="shopCartCard__img " src={item.image} alt="#" />
        </div>
        <div className="shopCartCard__info">
          <div className="shopCartCard__title ">
            <h4 className="shopCartCard__title_name ">{item.name}</h4>
            <p className="shopCartCard__title_name">
              {item.sale ? item.sale : item.price} ₽
            </p>
          </div>
          <div className="shopCartCard__category">{item.category}</div>
          <div className="shopCartCard__category wrapp">
            <p>Размер {item.size}</p>
            <p>Количество {item.amount}</p>
          </div>
          <div className="shopCartCard__btn">
            <button onClick={handleSetFavoritesItem}>
              <svg
                className={
                  favourites.some((items) => items === item.id)
                    ? "heartActive"
                    : "heart"
                }
                width="20"
                height="24"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 5.5575C19.5 6.7175 19.06 7.8875 18.17 8.7775L16.69 10.2575L10.32 16.6275C10.29 16.6575 10.28 16.6675 10.25 16.6875C10.22 16.6675 10.21 16.6575 10.18 16.6275L2.33 8.7775C1.44 7.8875 1 6.7275 1 5.5575C1 4.3875 1.44 3.2175 2.33 2.3275C4.11 0.5575 6.99 0.5575 8.77 2.3275L10.24 3.8075L11.72 2.3275C13.5 0.5575 16.37 0.5575 18.15 2.3275C19.06 3.2175 19.5 4.3775 19.5 5.5575Z"
                  stroke="black"
                />
              </svg>
            </button>
            {/* <button>
              <img src={heart} alt="#" />
            </button> */}
            <button onClick={handleDeleteClick}>
              <img src={trash} alt="#" />
            </button>
          </div>
        </div>
      </div>
      <div className="shopCartCard__line"></div>
    </>
  );
};

export default ShopCartCard;
