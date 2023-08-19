import React from 'react';
import './about-style.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="content-container">
                <div className="map-text-container">
                    <div className="map-container">
                        <iframe
                            title="Mačka Bar Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.7595122168345!2d15.645628415720228!3d46.55626477912873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f7f571a1d86e1%3A0x7b8d11e9b2855dbb!2sVoja%C5%A1ni%C5%A1ka%20ulica%206%2C%202000%20Maribor!5e0!3m2!1sen!2ssi!4v1568718549800!5m2!1sen!2ssi"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="about-text">
                        <h2>O nas</h2>
                        <p>
                            🐱 Lokal Mačka 🐱<br /><br />
                            Pridite in se sprostite v edinstvenem okolju, kjer se lahko pocrkljate s svojim najljubšim napitkom ob prijetni družbi naše čarobne mucke. Naša mačka je prijazna in rada sprejme nežne božanje ter se pocrklja s pozornostjo naših gostov.
                            <br /><br />🍵☕ Uživajte v Skodelici Dobrega Razpoloženja ☕🍵<br /><br />
                            Poleg tega, da si privoščite skodelico kave, čaja ali drugega napitka iz našega bogatega nabora, vam nudimo tudi priložnost, da se sprostite v prijetnem okolju, kjer vas bo mačka pomirila z njenim prisrčnim vedenjem.
                            <br /><br />🏡 Lokacija:<br /><br />

                            Nahajamo se v srcu Maribora, na
                            Vojašniški ulici 6 v Mariboru.
                            <br /><br />Veselimo se vašega obiska v "Mačkinem kotičku," kjer bo vaše doživetje še bolj prijetno ob bogati izbiri napitkov in tople družbe naše prikupne mačke.

                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
