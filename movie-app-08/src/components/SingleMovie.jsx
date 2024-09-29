import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './Context';



function SingleMovie() {

    const {id} = useParams();

    

    const [isLoading, setIsloading] = useState(true);
    const [movie, setMovie] = useState("");
  
  
    
  
    const getMovies = async (url) =>{
      setIsloading(true);
      try{
        
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
  
        
     
  
        if(data.Response === "True"){
          setIsloading(false)
          
          setMovie(data)
        }
        
  
      }catch(error){
        console.log(error);
        
  
      }
  
    }
  
  
    // here using setTimeout and clear time out to send the data after few seconds which will stop the  multiple calling of half typed movie name
  
    useEffect(()=>{
      let timeOut =  setTimeout(() =>{
        getMovies(`${API_URL}&i=${id}`)
  
      }, 500);
      return () => clearTimeout(timeOut)
  
    },[id])

    if(isLoading) {
      return(
        <div className="movie-section">
          <div className="loading">Loading...</div>
        </div>
      )
    }


  return (
    <div>
        <section className='movie-section'>
          <div className="movie-card">
            <figure>
              <img src={movie.Poster} alt="" />
            </figure>
            <div className="card-content">
          <p className="title">{movie.Title}</p>
          {/* <p className=""></p> */}
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
          </div>
          

        </section>
    </div>
  )
}

export default SingleMovie