import React from 'react'
import "./MovieCard.scss"
import { Link } from 'react-router-dom';

function MovieCard(props) {

  const { data } = props;

  return (
    <div>
      <div className="card-item">
        <Link to= {`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt="images" />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
        </Link>
        
      </div>
    </div>
  )
}

export default MovieCard