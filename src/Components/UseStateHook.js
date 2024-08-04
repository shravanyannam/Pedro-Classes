import React, { useState } from 'react'

export default function UseStateHook() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Set to Zero</button>
        {count}
    </div>
  )
}
