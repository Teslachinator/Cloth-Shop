import React from "react";

import ph1 from "./../../img/mainPhoto/image 1.png";
import ph2 from "./../../img/mainPhoto/image 2.png";
import ph3 from "./../../img/mainPhoto/image 3.png";
import left from "./../../img/svg/IconL.svg";
import right from "./../../img/svg/IconR.svg";
const MainSweaters = () => {
  return (
    <div className="sweaters">
      <div className="slider_logo">
        <div>
          <img src={left} alt="#" />
        </div>
        <h2>СВИТЕРЫ</h2>
        <div>
          <img src={right} alt="#" />
        </div>
      </div>
      <div className="aboutProd">
        <div>
          <h3>О продукте:</h3>
          <p className="text">
            <p>Свитеры вяжутся из пряжи состоящей на 100% из шерсти.</p>
            <p>Производится вся нужная обработка изделия.</p>
            <p>Полностью ручная работа авторские дизайны.</p>
            <p>Любовь к клиентам.</p>
          </p>
        </div>

        <div className="sweatersPhotos">
          <img className="photo1" src={ph3} alt="#" />
          <img className="photo2" src={ph2} alt="#" />
          <img className="photo3" src={ph1} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default MainSweaters;
