import { useState } from "react";

function FavoriteColor() {

    const [color, setColor] = useState("red");   //Initialize state 

    const changeColor = () => {
        setColor("Blue");
    };

    return (
        <>
            <h1> My favorite color is {color}!</h1>
            {/* <button type=" button" onClick={() => setColor("Blue")}>Change Color</button> */}

            <button type="button" onClick={changeColor}>
                Change Color
            </button>
        </>
    );
}

export default FavoriteColor;
