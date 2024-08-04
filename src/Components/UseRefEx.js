import React, { useRef, useState } from 'react'

export default function UseRefEx() {
    const [text, setText] = useState(""); 
    const inputField = useRef(null);

    const handleSubmit = () => {
        setText(inputField.current.value);
        inputField.current.value = "";
        inputField.current.focus();
    }

    return (
    <div>
        <input place="Type Something" ref={inputField}/>
        <button onClick={handleSubmit}>Submit</button>
        <p>{text}</p>
    </div>
  )
}
