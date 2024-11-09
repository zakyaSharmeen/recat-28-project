import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/apiURL'
import { STATUS } from '../utils/status'





const initialState = {
  categories: [],
  categoriesStatus : STATUS.IDLE,
  categoryProduct: [],
  categoryProductStatus: STATUS.IDLE
}

// Then, handle actions in your reducers:
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchAsyncCategories.pending, (state, action) => {
        state.categoriesStatus = STATUS.LOADING;
    })

    .addCase(fetchAsyncCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesStatus = STATUS.SUCCEEDED;
    })

    .addCase(fetchAsyncCategories.rejected, (state, action) => {
        state.categoriesStatus = STATUS.FAILED;
    })


  //   .addCase(fetchAsyncProductsOfCategory.pending, (state, action) => {
  //     state.categoryProductStatus = STATUS.LOADING;
  // })

  // .addCase(fetchAsyncProductsOfCategory.fulfilled, (state, action) => {
  //     state.categoryProduct = action.payload;
  //     state.categoryProductStatus = STATUS.SUCCEEDED;
  // })

  // .addCase(fetchAsyncProductsOfCategory.rejected, (state, action) => {
  //     state.categoryProductStatus = STATUS.FAILED;
  // })

  },
})
// export const fetchAsyncProductsOfCategory = createAsyncThunk('category-products/fetch', async(category) => {
//   const response = await fetch(`${BASE_URL}products/category/${category}`);
//   const data = await response.json();
//   console.log(data.products, "data came");
  
//   return data.products;
// });

// for indiudual categories
export const fetchAsyncCategories = createAsyncThunk('categories/fetch', async() => {
    const response = await fetch(`${BASE_URL}products/categories`);
    const data = await response.json();
    // console.log(data);
    
    return data;
});



export const getAllCategories = (state) => state.category.categories;
export const getAllCategoryProduct = (state) => state.category.categoryProduct;
export const getCategoryProductStatus = (state) => state.category.categoryProductStatus;



export default categorySlice.reducer;