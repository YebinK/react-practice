import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0); //count가 변경될 때마다 리렌더링 된다.

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <button onClick={increment}>
            Click {count}
        </button>
    );
};

export default Counter;