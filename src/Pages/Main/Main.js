import React from "react";
import BtnCatalog from "../../Components/BtnCatalog";
import MainAccessories from "./MainAccessories";
import MainCardigans from "./MainCardigans";
import MainSweaters from "./MainSweaters";
import "./main.css";

import ph1 from "./../../img/mainPhoto/image 1.png";
import ph2 from "./../../img/mainPhoto/image 2.png";
import ph3 from "./../../img/mainPhoto/image 3.png";
import ph4 from "./../../img/mainPhoto/image 4.png";
import ph5 from "./../../img/mainPhoto/image 5.png";
import ph6 from "./../../img/mainPhoto/image 6.png";
import ph9 from "./../../img/mainPhoto/image 7.png";
import ph8 from "./../../img/mainPhoto/image 8.png";
import ph7 from "./../../img/mainPhoto/image 9.png";

import styled from "styled-components";
import Carousel from "../../Helpers/Carousel";

const mainCategory = [
  {
    title: <p className="sweaters">СВИТЕРЫ</p>,
    photo1: ph1,
    photo2: ph2,
    photo3: ph3,
    about:
      "Свитеры вяжутся из пряжи состоящей на 100% из шерсти. Производится вся нужная обработка изделия. Полностью ручная работа авторские дизайны Любовь к клиентам",
    composition: "100% натуральная пряжа",
  },
  {
    title: <p className="accessories">АКСЕССУАРЫ</p>,
    photo1: ph4,
    photo2: ph5,
    photo3: ph6,
    about:
      "Свитеры вяжутся из пряжи состоящей на 100% из шерсти. Производится вся нужная обработка изделия. Полностью ручная работа авторские дизайны Любовь к клиентам",
    composition: "100% натуральная пряжа",
  },
  {
    title: <p className="cardigans">КАРДИГАНЫ</p>,
    photo1: ph7,
    photo2: ph8,
    photo3: ph9,
    about:
      "Свитеры вяжутся из пряжи состоящей на 100% из шерсти. Производится вся нужная обработка изделия. Полностью ручная работа авторские дизайны Любовь к клиентам",
    composition: "100% натуральная пряжа",
  },
];

const Main = () => {
  return (
    <Carousel>
      {mainCategory.map((p, index) => {
        return (
          <div key={index} className="main">
            <div className="slider_logo">{p.title}</div>
            <div className="aboutProd">
              <div>
                <h3>О продукте:</h3>
                <p className="text">
                  <p>{p.about}</p>
                </p>
              </div>

              <div className="sweatersPhotos">
                <img className="photo1" src={p.photo1} alt="#" />
                <img className="photo2" src={p.photo2} alt="#" />
                <img className="photo3" src={p.photo3} alt="#" />
              </div>
            </div>

            <div className="bottom">
              <p>
                Состав: <br /> {p.composition}
              </p>
              <BtnCatalog />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Main;
