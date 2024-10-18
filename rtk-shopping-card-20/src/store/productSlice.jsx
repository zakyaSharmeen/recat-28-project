
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
})



const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  }
    
  ,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
   
   
     
  },
});




export default productSlice.reducer;

export const fetchProducts = createAsyncThunk("products/fetch", async () =>{

  
    const response= await fetch("https://fakestoreapi.com/products")
    const resData = await response.json()
    return resData;
   
    

   
})
