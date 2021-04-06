import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let WebLights = () => {
  
  let [lightMode, setMode] = useState(true);
  const mode = lightMode ? "Light" : "Dark";

  let [temp, setTemp] = useState(22)

  return(
    <div className="project0">
      <div className={`lights ${mode}`}>
        <h4>We Are In {lightMode ? "Light" : "Dark"} Mode</h4>
        <button onClick={()=> setMode(!lightMode)}>Change Mode</button>
      </div>
      <div className={`temperature `}>
        <h3>{`Current temperature of Your Area: ${temp} Celsius`}</h3>
        <button onClick={()=>setTemp(temp+1)}><h1>+</h1></button>
        <button onClick={()=>setTemp(temp-1)}><h1>-</h1></button>
      </div>
    </div>
  )
}

ReactDOM.render(
  <WebLights />,
  document.getElementById('root')
)