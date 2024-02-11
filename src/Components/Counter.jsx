import React, { useState } from 'react';
import NavigationBar from './NavigationBar';

function Counter() {

    const [count, setCount] = useState(0);
    const decrement=()=>{
        setCount(count-1);
    }

    return (
        <div>
            <NavigationBar/>
            <p>Count : {count} </p>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </div>
    );
}

export default Counter;