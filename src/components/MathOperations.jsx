function MathOperations() {

    const multiply = (num1, num2) => {
        return num1 * num2
    }

    return (
        <>
            <h2 className="App">Multiplication Results</h2>
            <p className="App">5 × 3 = {multiply(5, 3)}</p>
            <p className="App">7 × 2 = {multiply(7, 2)}</p>
        </>

    );
}
export default MathOperations;
