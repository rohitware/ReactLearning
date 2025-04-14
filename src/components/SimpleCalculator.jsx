
function SimpleCalculator() {
    // declare two variables
    const a = 10;
    const b = 5;

    return (
        <>
            <h2 className="App"> Simple Calculations.</h2>

            <p className="App">a = {a}</p>
            <p className="App">b = {b}</p>

            <p className="App">Sum (a + b): {a + b}</p>
            <p className="App">Difference (a - b): {a - b}</p>
            <p className="App">Product (a × b): {a * b}</p>
            <p className="App">Division (a ÷ b): {a / b}</p>

        </>
    );
}

export default SimpleCalculator;
