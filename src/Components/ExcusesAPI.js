import React, { useState } from 'react';
import Axios from 'axios';

export default function ExcusesAPI() {
    const [generatedExcuse, setGeneratedExcuse] = useState('');

    const excuseHandler = (endURL) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${endURL}/`).then((resp) => {
            console.log(resp.data[0].excuse);
            setGeneratedExcuse(resp.data[0].excuse);
        })
    }

    return (
    <div className='APP'>
        <h1>Generate An Excuse</h1>
        <button onClick={() => excuseHandler("party")}>Party</button>
        <button onClick={() => excuseHandler("family")}>Family</button>
        <button onClick={() => excuseHandler("office")}>Office</button>
        <p>{generatedExcuse}</p>
    </div>
  )
}
