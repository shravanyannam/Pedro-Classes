import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function FetchData () {
    const [fetchData, setFetchData] = useState('');

    const fetchHandler = () => {
        Axios.get("https://catfact.ninja/fact").then((resp) => {
            console.log(resp.data);    
            setFetchData(resp.data.fact);
            })
    }

    useEffect(() => {
        fetchHandler();
    },[])

    return (
    <div>
        <button onClick={fetchHandler}>Click Me</button>
        <p>{fetchData}</p>
    </div>
  )
}
