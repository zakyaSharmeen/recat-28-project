import React, { useState } from 'react'

function Temp() {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");





  return (
    <>
    <div className="box">
        <div className="inputData">
            <input type="text" className='inputField'
            onChange={(event) => {}}
            />
        </div>
        <div className="info">
        <h2 className='location'>
            <i className='fas fa-street-view'></i>{city}
        </h2>
        <h1>5.25 deg cel</h1>
        <h3>Min : 5.25 deg Cel | Max : 5.5 deg Cel</h3>
    </div>
    </div>

    

    </>
  )
}

export default Temp