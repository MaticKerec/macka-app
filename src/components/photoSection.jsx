import React from 'react';
import './photoSection-style.css'
import photo1 from '../images/macka-lokacija/macka-at-night.jpg';
import photo2 from '../images/macka-notranjost.jpg';
import photo3 from '../images/izbira-pijac.jpg';

const Location = () => {
    return (
        <div className="photo-container">
            <div className="box">
                <div className="imgBx">
                    <img src={photo1} alt="Photo 1" />
                </div>
                <div className="content">
                    <div>
                        <h2>Kje nas najdete?</h2>
                        <p>Vojašniška ulica 6, 2000 Maribor</p>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="imgBx">
                    <img src={photo2} alt="Photo 2" />
                </div>
                <div className="content">
                    <div>
                        <h2>A se kaj dogaja?</h2>
                        <p>Redno organiziramo nore dogodke, na katerih ne manjka pijače in dobre energije.</p>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="imgBx">
                    <img src={photo3} alt="Photo 4" />
                </div>
                <div className="content">
                    <div>
                        <h2>Pijača za vsak letni čas</h2>
                        <p>Pestra ponudba sezonskih pijač, tako za hladne kot tudi vroče čase.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
