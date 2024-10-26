// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router'
// import { fetchAsyncMovieOrShowDetails, getAllselectedMovieOrShow } from '../../features/movies/movieSlice'


// function MovieDetails() {

//   const { imdbID } = useParams()
//   const dispatch = useDispatch()
//   const data = useSelector(getAllselectedMovieOrShow)
//   console.log(data);
  

//   useEffect(() =>{
//     dispatch(fetchAsyncMovieOrShowDetails(imdbID))
//   },[dispatch, imdbID]) 


//   return (
//     <div>MovieDetails</div>
//   )
// }

// export default MovieDetails
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow } from '../../features/movies/movieSlice'

function MovieDetails() {
  const {imdbID} = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getSelectedMovieOrShow)
  console.log(data);
  

  useEffect(() =>{
    dispatch(fetchAsyncMovieOrShowDetail(imdbID))
  },[dispatch, imdbID])
  return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails