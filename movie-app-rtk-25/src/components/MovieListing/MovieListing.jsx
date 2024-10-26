


import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllshow } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import "./MovieListing.scss"

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const show = useSelector(getAllshow);

  // console.log(movies);
  

  let renderMovies, renderShow = '';

  renderMovies = movies.Response === 'True' ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))

    
  ) : (
    <div className="movie-error">
      <h3>{movies.Error}</h3>
    </div>
  );



  renderShow = show.Response === 'True' ? (
    show.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))

    
  ) : (
    <div className="show-error">
      <h3>{show.Error}</h3>
    </div>
  );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
        {renderMovies}
        </div>

      </div>

      {/* series */}

      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
        {renderShow}
        </div>

      </div>
     
    </div>
  );
}

export default MovieListing;
