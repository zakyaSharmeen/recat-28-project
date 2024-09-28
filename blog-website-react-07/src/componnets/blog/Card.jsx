import React from 'react'
import Cdata from './Cdata'

function Card() {
  return (
    <>
      <div className="card grid top">
        {
          Cdata.map((d) => (
            <div className="box">
              <div className="img">
                <img src={d.cover} alt="" />
              </div>
              <span>{d.title}</span>
              <h2>{d.category}</h2>
            </div>

          ))
        }


      </div>
    </>

  )
}

export default Card