import React, { useState } from 'react'
import ProductInfo from './ProductInfo'


function Product() {


    const [item, setItem] = useState(ProductInfo)
    // console.log(item);


    
    const [cakeItem, setCakeItem] = useState(ProductInfo[0])

    // function
    const selectCake = (pos) =>{
        setCakeItem(ProductInfo[pos])

    }
    


  return (
    <>
    <div className="container">
        <h1>Cake Factory</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quasi!</p>
        <div className="cakeContainer">
            {
                item.map((item, pos) =>{
                    
                    return(
                        <img className="classImg" src={item.image} alt=""  onClick={() => {selectCake(pos)}}/>
                    )

                })
            }
        </div>

      
       <div className="cake-info">
            <h1>{cakeItem.name}</h1>
            <img src={cakeItem.image} alt="" />
            <p>{cakeItem.descripion}</p>
            <div className="bottonBox">
                <h4>Price <span className='priceBg'>{cakeItem.price}</span></h4>
                <h4><span className='rateBg'>{cakeItem.rating}</span></h4>
            </div>
        </div>
      
    </div>

    
    </>
  )
}

export default Product