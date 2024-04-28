import React from "react";

const MouseClicker = ({ name = "one" }) => {
    const handleButtonClick = (event) => {
        console.log(event.target.name);
    };

    const handleImageClick = (event) => {
        console.log(event.currentTarget.parentNode.name);
    };

    return (
        <button name={name} onClick={handleButtonClick}>
            <img src="image.png" onClick={handleImageClick} alt="image" />
        </button>
    );
};
