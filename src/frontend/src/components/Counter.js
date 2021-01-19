import React, { useState } from 'react';

const Counter = (props) => {

    const [count, setCount] = useState(0); //count가 변경될 때마다 리렌더링 된다.

    const increment = () => {
        setCount(count + 1);
    }

    const clickString = props.click || 'click default';

    return (
        <button onClick={increment}>
            {clickString} {count}
        </button>
    );
};

export default Counter;