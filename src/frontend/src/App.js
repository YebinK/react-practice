import React, {useState} from 'react';

function App() {
    const [username, setUsername] = useState('') //초기값: empty string
    const [password, setPassword] = useState('') //초기값: empty string

    const onSubmit = (event) => {
        event.preventDefault(); //폼이 새로고침되는 것을 막아주기 위해
        alert('submitted');
        console.log(username, password);
    }

    //input의 값이 변할 때마다 username 변수를 업데이트한다.
    return (
        <div className="App">
            <form onSubmit={onSubmit}>
            <input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
            <br/>

            <input
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default App;
