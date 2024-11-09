import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice  from './sidebarSlice'
import categorySlice from "./categorySlice"
import productSlice from "./productSlice"
import cartSlice from "./cartSlice"

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    category: categorySlice,
    product: productSlice,
    cart: cartSlice
  },
})