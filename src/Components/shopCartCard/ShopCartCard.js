import React from "react";
import "./shopCartCard.css";
import heart from "./../../img/svg/Heart.svg";
import trash from "./../../img/svg/Trash.svg";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../redux/reducers/shopReducer";

const ShopCartCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteItemFromCart(item));
  };
  return (
    <div className="shopCartCard">
      <div>
        <img className="shopCartCard__img" src={item.image} alt="#" />
      </div>
      <div className="shopCartCard__info">
        <div className="shopCartCard__title ">
          <h4 className="shopCartCard__title_name">{item.name}</h4>
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
          <button>
            <img src={heart} alt="#" />
          </button>
          <button onClick={handleDeleteClick}>
            <img src={trash} alt="#" />
          </button>
        </div>
      </div>

      {/* <div className="shopCartCard__img">
        <img className="shopCartCard__img" src={item.image} alt="" />
      </div>
      <div className="shopCartCard__text">
        <div className="shopCartCard__name">{item.name}</div>
        <div className="shopCartCard__category ff tw">
          {item.category} {item.id}
        </div>
        <div className="shopCartCard__group">
          <div className="shopCartCard__size ff tw">Размер {item.size}</div>
          <div className="shopCartCard__amount ff tw">
            Количество{item.amount}
          </div>
        </div>
        <div className="shopCartCard__btn">
          <button>
            <img src={heart} alt="#" />
          </button>
          <button onClick={handleDeleteClick}>
            <img src={trash} alt="#" />
          </button>
        </div>
      </div>
      <div className="shopCartCard__price tw">
        {item.sale ? item.sale : item.price}
      </div> */}
    </div>
  );
};

export default ShopCartCard;
