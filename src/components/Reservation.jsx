import React from 'react';
import { useState } from "react";
import "./reservation-style.css";
import FormInput from "./formInput";

const Reservation = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        datum: "",
    });

    const inputs = [
        {
            id: 1,
            name: "imePriimek",
            type: "text",
            placeholder: "ime in priimek",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Ime in Priimek",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "email ni pravilen!",
            label: "Email",
            required: true,
        },
        ,
        {
            id: 3,
            name: "stevilo-ljudi",
            type: "number",
            placeholder: "Število Ljudi",
            label: "Število ljudi",
        },
        {
            id: 4,
            name: "datum",
            type: "date",
            placeholder: "Datum",
            label: "Datum",
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="reservation-container">
            <div className="reservation">
                <form onSubmit={handleSubmit}>
                    <h1 className='reservate-title'>Rezerviraj mizo</h1>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <button className='reservate'>Rezerviraj!</button>
                </form>

            </div>
        </div>
    );
};

export default Reservation;