import React from "react";
import airpods from "../img/promo_airpods.jpg";
import appleWatch from "../img/promo_apple_watch.jpg";
import appleWatchUltra from "../img/promo_apple_watch_ultra.jpg";
import ipadPro from "../img/promo_ipadpro.jpg";
import tv from "../img/promo_tv4k.jpg";

const MainPage = () => {
  return (
    <div classname="container">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img src={airpods} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src={appleWatch} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={appleWatchUltra} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={ipadPro} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={tv} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MainPage;
