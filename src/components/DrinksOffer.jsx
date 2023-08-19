import React from 'react';
import './drinksOffer-style.css';
import seasonalDrinksIcon from '../images/icons/seasonal.png';
import nonAlcoholicDrinksIcon from '../images/icons/lemonade.png';
import alcoholicDrinksIcon from '../images/icons/croissant.png';

const Ponudba = () => {
    return (
        <div className="items">
            <div className="text-container">
                <h2>Ponudba</h2>
            </div>
            <div className="icon-container">
                <div className="icon-text">
                    <h3>Sezonske pijače</h3>
                    <img src={seasonalDrinksIcon} alt="Sezonske pijače" className="icon" />
                </div>
                <div className="icon-text">
                    <h3>Pijača</h3>
                    <img src={nonAlcoholicDrinksIcon} alt="Pijače" className="icon" />
                </div>
                <div className="icon-text">
                    <h3>Prigrizki</h3>
                    <img src={alcoholicDrinksIcon} alt="Prigrizki" className="icon" />
                </div>
            </div>
        </div>
    );
};

export default Ponudba;
