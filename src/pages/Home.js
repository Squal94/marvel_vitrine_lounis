import React from "react";
import blackWidow from "./../assets/img/img1.png";
import captainMarvel from "./../assets/img/img2.png";
import hulk from "./../assets/img/img3.png";
import blackPanther from "./../assets/img/img4.png";
import ironMan from "./../assets/img/img5.png";
import spiderMan from "./../assets/img/img6.png";
import thor from "./../assets/img/img7.png";
import captainAmerica from "./../assets/img/img8.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home__left">
        <h1 className="home__left--title">
          <span>MARVEL</span> <br /> UNIVERS
        </h1>
      </div>
      <div className="home__right">
        <div className="home__right__diaporama">
          <div className="home__right__diaporama--wrapper">
            <img src={blackWidow} alt="Black widow" />
            <img src={hulk} alt="hulk" />
            <img src={blackPanther} alt="Black Panther" />
            <img src={ironMan} alt="Iron man" />
            <img src={spiderMan} alt="Spider man" />
            <img src={thor} alt="Thor" />
            <img src={captainMarvel} alt="Captain marvel" />
            <img src={captainAmerica} alt="Captain America" />
            <img src={blackWidow} alt="Black widow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
