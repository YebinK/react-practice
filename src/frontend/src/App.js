import React, { useEffect, useState } from 'react';

function App() {

    const [count, setCount] = useState(0); //count가 변경될 때마다 리렌더링 된다.
    const [elly, setElly] = useState(0);

    useEffect(() => {
        //이 함수 안에 있는 로직이 렌더링이 된 후 실행된다.
        console.log('얘가 호출된다.');
        console.log(count, elly)
    }, [count]) //count가 변경될 때에만 이 메소드가 실행된다. elly까지 받고 싶으면 [count, elly]
    console.log('얘가 먼저 호출되고');

    useEffect(() => {
        console.log('first rendering');
    }, []); //이렇게 아무것도 안 넣으면 최초 1회만 실행된다.

    const increment = () => {
        setCount(count + 1);
    }
    return (
        <div className="App">
            <h1>Elly Nelly</h1>
            <button onClick={increment}>Click</button>
            <button onClick={() => setElly(elly + 1)}>Click1</button>
        </div>
    );
}

export default App;
