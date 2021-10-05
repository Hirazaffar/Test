import React from 'react';
import shop from "./shop.png";
import './Main.css';

const Main = () => {
    return (
        <div>
            <img
            src={shop}
            alt="jumbotron__about-background-img"
            className="jumbotron__about-background-img"
          />
        </div>
    )
}

export default Main;
