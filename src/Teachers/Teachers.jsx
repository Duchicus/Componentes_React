import React, { useState } from 'react'

const Teachers = ({defaultname}) => {
  const [name,setName] = useState(defaultname)

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
        <ul>
          <li onClick={() => setName("Data")}>Data</li>
          <li onClick={() =>setName("Reyes")}>Reyes</li>
          <li onClick={() =>setName("Yolanda")}>Yolanda</li>
        </ul>
        <h2>{name}</h2>
        <input onChange={handleChange}/>
    </div>
  )
}

export default Teachers