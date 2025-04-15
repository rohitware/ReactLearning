import { useState } from "react";

function Counter() {
    const [count, steCount] = useState(0);

    const increase = () => steCount(count + 1);

    const decrease = () => steCount(count - 1);

    const reset = () => steCount(0);


    return (
        <>
            <h2> Simple React Counter</h2>
            <h3>Count: {count}</h3>
            <button onClick={increase}>+ Increase</button>
            <button onClick={decrease} style={{ marginLeft: '10px' }}>- Decrease</button>
            <button onClick={reset} style={{ marginLeft: '10px' }}> Reset</button>

        </>
    );
}
export default Counter;
