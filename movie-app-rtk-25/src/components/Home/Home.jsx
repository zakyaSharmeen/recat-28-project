import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
// import MovieApi from '../../common/apis/MovieApi'
// import { APIKey } from "../../common/apis/MovieApiKey"
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShow } from '../../features/movies/movieSlice'

function Home() {

  // const movieText = "Harry"
  const dispatch = useDispatch()


  // syncronous method 
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const res = await MovieApi
  //       .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
  //       .catch((err) => {
  //         console.log(err);

  //       }) 
  //       // console.log(res);

  //     // console.log(res.data);
  //     dispatch(addMovies(res.data))

  //   };
  //   fetchMovies()
  // }, []
  // )

  // asynchronous method
  useEffect(() => {
   
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShow())
  }, [dispatch]
  )


  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}

export default Home