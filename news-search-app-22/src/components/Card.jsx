import React from 'react'

function Card({newsData}) {
  console.log(newsData);

  const readMore = (url) =>{
    window.open(url)

  }
  
  return (
    <div className='cardContainer'>
      {
        newsData.map((currItem, index) =>{ 

          if(!currItem.urlToImage){
            return null
          }else{
            return(
              <div className="card">
                <img src={currItem.urlToImage} alt="" />
               <div className="cardContet">
               <a className='title' href='/' onClick={() => readMore(currItem.url)}>{currItem.title}</a>
                <p>{currItem.description}</p>
                <button onClick={() => readMore(currItem.url)}>READ MORE</button>
               </div>
  
              </div>
            )
          }
         

        })
      }
      
    </div>
  )
}

export default Card