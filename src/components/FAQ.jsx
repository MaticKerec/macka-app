import React, { useState } from 'react';
import './FAQ-style.css'; // Assuming the CSS styles are in a file named 'styles.css'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const questions = [
        {
            id: 1,
            question: 'Kakšni so vaši delovni časi?',
            answer: 'Ponedeljek - Četrtek od 9.00 do 23.00, Petek in Sobota od 9.00 do 2.00 in Nedelja od 9.00 do 23.00',
        },
        {
            id: 2,
            question: 'Kakšne tipe koktejlov ponujate?',
            answer: 'Imamo pestro izbiro koktejlov katere vam naše osebje z veseljem pripravi. ',
        },
        {
            id: 3,
            question: 'Katera vina ponujamo?',
            answer: 'Imamo veliko izbiro hišnih, penečih, belih in rdečih vin katere vam z veseljem ponudimo. Več o naši ponudbi vin lahko preberete zgoraj.',
        },
        {
            id: 4,
            question: 'Ponujate kakšno hrano/prigrizke?',
            answer: 'Ponujamo različne prigrizke kot rogljičke / croissante, toaste in sveže pečene pizzete.',
        },
        {
            id: 5,
            question: 'Ali potrebujem rezervacijo?',
            answer: 'Načeloma rezervacija ni potrebna, vendar vam priporočamo, da rezervirate svojo mizo v petek in soboto saj imamo omejeno število miz.',
        },
        {
            id: 6,
            question: 'Katere načine plačila omogočate?',
            answer: 'Omogočamo plačila z gotovino in kartico.',
        },
        {
            id: 7,
            question: 'Imate prostor za kajenje?',
            answer: 'Ne. Kajenje je dovoljeno samo na terasi našega lokala.',
        },
        {
            id: 8,
            question: 'Ali lahko rezerviramo vaše prostore?',
            answer: 'Da. Zaprtim družbam omogočamo rezervacijo naših prostorov za dogodke.',
        },


        //Imamo tudi veliko izbiro hišnih, penečih, belih in rdečih vin katere vam z veseljem ponudimo. Več o naši ponudbi vin lahko preberete zgoraj.
        // Add more questions and answers as needed
    ];

    const handleAccordionClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    return (
        <div className="faq-container">
            <div className="faq">
                <form className='faq-form'>
                    <h1 className='faq-text'>FAQ / Pogosta vprašanja</h1>
                    {questions.map((q, index) => (
                        <div
                            key={q.id}
                            className="question-wrapper"
                            onClick={() => handleAccordionClick(index)}
                        >
                            <div className="question">
                                {q.question}
                                <span className="expansion-icon">
                                    {index === activeIndex ? '-' : '+'}
                                </span>
                            </div>
                            <div className={`answer ${index === activeIndex ? 'active' : ''}`}>
                                {q.answer}
                            </div>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
};

export default FAQ;
