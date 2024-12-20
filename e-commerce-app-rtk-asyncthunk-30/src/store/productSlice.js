import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/apiURL'
import { STATUS } from '../utils/status'




const initialState = {
  products: [],
  productsStatus : STATUS.IDLE,
  productsSingle: [],
  productsSingleStatus: STATUS.IDLE
}

// Then, handle actions in your reducers:
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchAsyncProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
    })

    .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productsStatus = STATUS.SUCCEEDED;
    })

    .addCase(fetchAsyncProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAILED;
    })

    .addCase(fetchAsyncProductSingle.pending, (state, action) => {
        state.productsSingleStatus = STATUS.LOADING;
    })

    .addCase(fetchAsyncProductSingle.fulfilled, (state, action) => {
        state.productsSingle = action.payload;
        state.productsSingleStatus = STATUS.SUCCEEDED;
    })

    .addCase(fetchAsyncProductSingle.rejected, (state, action) => {
        state.productsSingleStatus = STATUS.FAILED;
    })

  },
})

// for product list
export const fetchAsyncProducts = createAsyncThunk('products/fetch', async(limit) => {
    const response = await fetch(`${BASE_URL}products?limit=${limit}`);
    const data = await response.json();
    // console.log(data.products);
    
    return data.products;
});

// for single product data
export const fetchAsyncProductSingle = createAsyncThunk('product-single/fetch', async(id) => {
    const response = await fetch(`${BASE_URL}products/${id}`);
    const data = await response.json();
    return data;
});


export const getAllProducts = (state) => state.product.products;
export const getAllProductsStatus = (state) => state.product.productsStatus;
export const getProductSingle = (state) => state.product.productsSingle;
export const getSingleProductStatus = (state) => state.product.productsSingleStatus;



export default productSlice.reducer;