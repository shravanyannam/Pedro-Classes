import React, { useMemo, useState } from 'react';

const  UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const changableValue = (num) =>{
        return num * 2;
    }

    const memoize = useMemo(() => changableValue(count), [count]);
 return (
    <div>
        <p>Counter no:{memoize}</p>
        <button onClick={() => setCount(count + 1)}>Increament</button>
        <input value = {inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Enter value'/>
    </div>
 )
}

export default UseMemoHook;