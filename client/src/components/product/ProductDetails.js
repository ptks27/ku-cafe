import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { productId } = useParams();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Do something with the entered details, e.g., submit to an API

        // Reset the form fields
        setName("");
        setSurname("");
        setPhoneNumber("");
    };

    return (
        <div>
            <h2>Product Details for Product ID: {productId}</h2>

            {/* Form for entering details */}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>

                <label>
                    Surname:
                    <input type="text" value={surname} onChange={handleSurnameChange} />
                </label>

                <label>
                    Phone Number:
                    <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProductDetails;
