import React from "react";

import ph4 from "./../../img/mainPhoto/image 4.png";
import ph5 from "./../../img/mainPhoto/image 5.png";
import ph6 from "./../../img/mainPhoto/image 6.png";

const MainAccessories = () => {
  return (
    <div className="accessories">
      <h2>КАРДИГАНЫ</h2>
      <div className="aboutProd">
        <h3>О продукте:</h3>
        <p>
          Свитеры вяжутся из пряжи состоящей на 100% из шерсти. Производится вся
          нужная обработка изделия. Полностью ручная работа авторские дизайны
          Любовь к клиентам
        </p>
      </div>
      <div className="accessoriesPhotos">
        <img src={ph4} alt="#" />
        <img src={ph5} alt="#" />
        <img src={ph6} alt="#" />
      </div>
    </div>
  );
};

export default MainAccessories;
