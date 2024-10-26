


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import MovieApi from '../../common/apis/MovieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const movieText = 'Harry';
    const res = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
    return res.data; 
  }
);

export const fetchAsyncShow = createAsyncThunk(
  'movies/fetchAsyncShow',
  async () => {
    const seriesText = 'Friends';
    const res = await MovieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`);
    return res.data; 
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  'movies/fetchAsyncMovieOrShowDetail',
  async (id) => {
    const res = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`);
    // console.log(res);
    
    return res.data; 
  }
);







const initialState = {
  movies: {},
  show: {},
  selectedMovieOrShow: {},
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        console.log('pending');
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log('fulfilled');
        state.movies = payload;
      })
      .addCase(fetchAsyncMovies.rejected, (state, action) => {
        console.log('rejected', action.error.message);
      })
      .addCase(fetchAsyncShow.fulfilled, (state, {payload}) => {
        console.log("fullfiled" );
        return{ ...state, show: payload}
      })

      .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, {payload}) => {
        console.log("fullfiled" );
        return{ ...state, selectedMovieOrShow: payload}
      }) 


      
  },
});

export const { addMovies } = movieSlice.actions;

export default movieSlice.reducer;

// Selector to get all movies from the state
export const getAllMovies = (state) => state.movies.movies;
export const getAllshow = (state) => state.movies.show;
// export const getAllselectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow

