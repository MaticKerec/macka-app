import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import logo from '../images/macka-text-below.svg';
import './menu-style.css';

function Menu(props) {
    const pages = [
        {
            title: 'Cenik',
            logo: logo,
        },
        {
            title: 'Sezonske pijače',
            engItem: 'Seasonal drinks',
            items: [
                { name: 'Mojito (Jagoda ali Pasijonka)', price: '6.00 €' },
                { name: 'Espresso Martini', price: '5.50€' },
                { name: 'Mango Spritz', price: '4.50€' },
                { name: 'Moscow Mule', price: '6.50€' },
                { name: 'Ledena Kava ali Kakav', price: ' 4.10€' },
                { name: 'Penina (Seven Numbers - Brut)', price: '29,00€' },
                { name: 'Voda z okusi (Malina ali Bezeg)', price: ' 3.50€' },
                { name: 'Gin Tonik (Pink, Lemon, Orange, Mačji)', price: '5.30€' },

            ],
        },
        {
            title: 'Kava',
            engItem: 'Coffee',
            items: [
                { name: 'Espresso / Ristretto', price: '1.70 €' },
                { name: 'Dvojni Espresso / Double Espresso', price: '3.00 €' },
                { name: 'Macchiato', price: '1.80 €' },
                { name: 'Podaljšana kava / Long Coffee', price: '1.70 €' },
                { name: 'Kava z mlekom / Coffee with milk', price: '1.90 €' },
                { name: 'Cappuccino', price: '2.00 €' },
                { name: 'Mali Cappuccino / Small Cappuccino', price: '1.80 €' },
                { name: 'Kava s smetano / Coffee with whipped cream', price: '2.00 €' },
                { name: 'Mala bela kava / Small white coffee', price: '2.00 €' },
                { name: 'Velika bela kava', price: '2.20 €' },
                { name: 'Latte Macchiatto', price: '2.50 €' },
                { name: 'Ledena Kava (sladoled & smetana) / Ice Coffee (ice cream & whipped cream)', price: '4.10 €' },
                { name: 'Ledeni Kakav (sladoled & smetana) / Ice Cacao (ice cream & whipped cream)', price: '4.10 €' },
                { name: 'Affogato', price: '2.90 €' },
                { name: 'Otroški Cappuccino', price: '1.20 €' },
                { name: 'Dodate riževo ali kokosovo mleko', price: '+ 0.50 €' },
                { name: 'Brezkofeinska - Decaf', price: '+ 0.40 €' },
                { name: 'TO-GO Embalaža', price: '+ 0.30 €' },
                { name: 'Kava čez led / Coffee over ice', price: '+ 0.20 €' },
            ],
        },
        {
            title: 'Topli Napitki',
            engItem: 'Hot Drinks',
            items: [
                { name: 'Čaji Infinitea / Tea' },
                { name: 'kamilica, meta, sladke sanje, pravljični gozd BIO, planinski raj, ingver', price: '2.70 €' },
                { name: 'Dvojni Espresso / Double Espresso', price: '3.00 €' },
                { name: 'Macchiato', price: '1.80 €' },
                { name: 'Podaljšana kava / Long Coffee', price: '1.70 €' },
                { name: 'Kava z mlekom / Coffee qith milk', price: '1.90 €' },
            ],
        },
        {
            title: 'Brezalkoholne Pijače',
            engItem: 'Non - Alcoholic Drinks',
            items: [
                { name: 'Coca Cola / Coca Cola Zero / Fanta / Sprite / Schweppes', size: '', price: '2.80 €' },
                { name: 'Ledeni čaj', size: '0.25l', price: '2.80 €' },
                { name: 'Radenska / Radenska Naturelle', size: '0.25l', price: '2.10 €' },
                { name: 'Radenska z okusi', size: '0.25l', price: '2.20 €' },
                { name: 'Voda z okusi OAZA', size: '0.25l', price: '2.20 €' },
                { name: 'Sok Fructal', size: '0.20l', price: '2.80 €' },
                { name: 'Cedevita', size: '0.35l', price: '2.50 €' },
                { name: 'Cockta', size: '0.25l', price: '2.80 €' },
                { name: 'Orangina', size: '0.25l', price: '2.80 €' },
                { name: 'Tonic Goldberg', size: '0.20l', price: '3.10 €' },


            ],
        },
        {
            title: 'Hišna Vina',
            engItem: 'House Wines',
            items: [
                { name: 'Hišno Vino Beli Cuvée Mačka 2022 - Jeruzalem Ormož', price: '2.80 €' },
                { name: 'Hišno Vino 2021 - Doppler', price: '2.80 €' },
                { name: 'Hišno Vino Rdeči Cuvée', price: '2.80 €' },
                { name: 'Cviček', price: '2.80 €' },
                { name: 'Penina Mačka - Puklavec Wines - polsuha / suha', price: '2.80 €' },

            ],
            title: 'Peneča Vina',
            engItem: 'Sparkling Wines',

        },
        {
            title: 'Bela Vina',
            engItem: 'White Wines',
            items: [
                { name: 'Sauvignon, suho / dry (Mukenauer)', price: '2.80 €' },
                { name: 'Sivi Pinot Rutilus, suho / dry (Kušter)', price: '2.80 €' },
                { name: 'Šipon, suho / dry (Doppler)', price: '2.80 €' },
                { name: 'Chardonnay, suho / dry (Horvat)', price: '2.80 €' },
                { name: 'Renski Rizling, polsuho / semi-dry (Puklavec Wines)', price: '2.80 €' },
                { name: 'Rumeni Muškat, polsladko / semi-sweet (Oskar)', price: '2.80 €' },
                { name: 'Traminec, polsladko / semi-sweet (Horvat)', price: '2.80 €' },
                { name: 'Muškat Ottonel, polsladko / semi-sweet (Jaunik)', price: '2.80 €' },
                { name: 'Zeleni Silvanec / dry (Doppler)', price: '2.80 €' },
                { name: 'Laški Rizling, 2019 suho / dry (Ducal)', price: '37.00 €' },
                { name: 'Renski Rizling / dry (Ducal)', price: '37.00 €' },

            ],
        },
        {
            title: 'Rdeča Vina',
            engItem: 'Red Wines',
            items: [
                { name: 'Rdeča Vina / Red Wines' },
                { name: 'Modri Pinot, suho / dry' },
                { name: 'Modri Pinot, suho / dry' },
                { name: 'Merlot Instinct, suho / dry' },
                { name: 'Cabernet Sauvignon, suho / dry' },
                { name: 'Sladki Refošk, sladko / sweet' },
                { name: 'Rose Vina / Rose Wines' },
                { name: 'Efekt Rose, polsuho / semi-dry' },
                { name: 'Tris Rose, polsuho / semi-dry' },


            ],
        },
    ];

    return (
        <div className="menu-container">
            <HTMLFlipBook width={600} height={800}>
                {pages.map((page, index) => (
                    <div key={index} className="demoPage" style={{ paddingTop: '50px' }}>
                        {index === 0 ? (
                            <h1 style={{ textAlign: 'center' }}>{page.title}</h1>
                        ) : (
                            <h1>{page.title}</h1>
                        )}
                        {page.engItem && <h2>{page.engItem}</h2>}
                        {index === 0 && (
                            <div className="logo-container">
                                <img className="logo" src={page.logo} alt="Logo" />
                            </div>
                        )}
                        {index !== 0 && (
                            <div className="items-container">
                                <ul>
                                    {page.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <span className="item-name">{item.name}</span>
                                            <span className="item-price">{item.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </HTMLFlipBook>
        </div>
    );
}

export default Menu;
