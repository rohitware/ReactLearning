import React, { useState, useEffect } from 'react';

function UseEffectCounter() {
  const [count, setCount] = useState(0);

  // useEffect runs when the component mounts and whenever 'count' changes
  useEffect(() => {
    console.log(`You clicked ${count} times`);

    // Optional cleanup example (not needed here, but shown for illustration)
    return () => {
      console.log('Cleaning up...');
    };
  }, [count]); // Dependency array

  return (
    <div>
      <h1>Counter Example</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default UseEffectCounter;
