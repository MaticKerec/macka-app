import React from 'react';
import './home-style.css';
import coffeeWallpaper from '../images/coffee_cup.jpg';

const Home = () => {
    return (
        <div className="container">
            <div className="coffeeCup-wrapper">
                <img src={coffeeWallpaper} alt="Coffee Cup" className="coffeeCup" />
                <div className="logoTextWrapper">
                    <h1 className="welcomeText">Odličen ambient <br />in <br />Pestra ponudba pijače</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;
