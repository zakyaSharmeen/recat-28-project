import React from 'react'
import { useGlobaltext } from './Context'
import { NavLink } from 'react-router-dom';

function Movies() {

  const {movie, isLoading} = useGlobaltext();

  if(isLoading){
    return(
      <div >
        <div className="loading">Loading.......</div>
      </div>
    )
  }



  return (
    <div>
      <div className="movie-page">
        <div className="grid grid-4-col">
        {movie.map((currMovie) => {
          const {imdbID, Title, Poster} = currMovie;
          const movieName = Title.substring(0, 15)
        return (
          
          <NavLink to={`movie/${imdbID}`}>
            <div className="card">
              <div className="card-info">
                <h2>{movieName.length >= 15 ? `${movieName}...` : movieName}</h2>
                <img src={Poster} alt="" />
              </div>
            </div>

          </NavLink>

        )
      })}

        </div>
      </div>
      
    </div>
  )
}

export default Movies