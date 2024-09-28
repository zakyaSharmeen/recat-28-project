import React from "react";
import Sdata from "../slide/Sdata";





export default function CardTwo() {
  return (
    <>
      <div className="CardTwo top slide">
     
     
         {Sdata.map((card) => (
           
                <div className="box">
                    <div className="img img2">
                        <img src={card.cover} alt="" />
                    </div>
                    <div className="text">
                        <span>{card.category}</span>
                        <h2>{card.title}</h2>
                        <p>{card.desc}</p>
                    </div>

                </div>

          

       )) }
      
       
      
      </div>
    </>
  );
}
