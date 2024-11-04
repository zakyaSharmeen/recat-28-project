import { configureStore } from '@reduxjs/toolkit'
import CartSlice  from './slice/CartSlice'
import  CategorySlice  from './slice/CategorySlice'
import  SearchSlice  from './slice/SearchSlice'

export const store = configureStore({
  reducer: {
    zakya: CartSlice,
    category: CategorySlice,
    search: SearchSlice
    
  },
}) 