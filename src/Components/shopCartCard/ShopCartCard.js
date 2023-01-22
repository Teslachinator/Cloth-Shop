import React from "react";
import "./shopCartCard.css";
import heart from "./../../img/svg/Heart.svg";
import trash from "./../../img/svg/Trash.svg";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../redux/cart/reducer";

const ShopCartCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteItemFromCart(item.id));
  };
  return (
    <div className="shopCartCard">
      <div className="shopCartCard_img">
        <img className="shopCartCard_img" src={item.image} alt="" />
      </div>
      <div className="shopCartCard_text">
        <div className="shopCartCard_name">{item.name}</div>
        <div className="shopCartCard_category ff tw">{item.category}</div>
        <div className="shopCartCard_group">
          <div className="shopCartCard_size ff tw">Размер {item.size}</div>
          <div className="shopCartCard_amount ff tw">
            Количество{item.amount}
          </div>
        </div>
        <div className="shopCartCard_btn">
          <button>
            <img src={heart} alt="#" />
          </button>
          <button id={item.id} onClick={handleDeleteClick}>
            <img src={trash} alt="#" />
          </button>
        </div>
      </div>
      <div className="shopCartCard_price tw">
        {item.sale ? item.sale : item.price}
      </div>
    </div>
  );
};

export default ShopCartCard;
