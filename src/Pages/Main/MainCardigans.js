import React from "react";

import ph7 from "./../../img/mainPhoto/image 7.png";
import ph8 from "./../../img/mainPhoto/image 8.png";
import ph9 from "./../../img/mainPhoto/image 9.png";

const MainCardigans = () => {
  return (
    <div className="cardigans">
      <h2>КАРДИГАНЫ</h2>
      <div className="aboutProd">
        <h3>О продукте:</h3>
        <p>
          Свитеры вяжутся из пряжи состоящей на 100% из шерсти. Производится вся
          нужная обработка изделия. Полностью ручная работа авторские дизайны
          Любовь к клиентам
        </p>
      </div>
      <div className="cardigansPhotos">
        <img src={ph7} alt="#" />
        <img src={ph8} alt="#" />
        <img src={ph9} alt="#" />
      </div>
    </div>
  );
};

export default MainCardigans;
