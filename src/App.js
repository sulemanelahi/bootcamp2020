import React, { useState } from 'react';

let WebLights = ({dark, light}) => {
  
  let [defaultMode, setMode] = useState(true);


  return(
    <div>
      <h4>Page is In {defaultMode ? "Light" : "Dark"} Mode</h4>
      <br/>
      <button onClick={()=> setMode(!defaultMode)}>Change Mode</button>
    </div>
  )
}

export default WebLights;