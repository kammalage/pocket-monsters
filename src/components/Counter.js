import { React, useState } from 'react';

function Counter() {
    const [count, useCount] = useState(0);

    function Increment() {
        useCount((prevCount) => {
            return prevCount + 1;
        });
    }

    function Decrement() {
        useCount((prevCount) => {
            return prevCount - 1;
        });
    }

    return (
        <div>
            <h3>Counter</h3>
            <p>Count: {count}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
