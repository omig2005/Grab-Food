import { configureStore } from '@reduxjs/toolkit'
import CartSlice from "./slice/CartSlice"
import CategorySlice from "./slice/categorySlice"
import SearchSlice from "./slice/searchSlice"

export const store = configureStore({
  reducer: {
     cart: CartSlice,
     category:CategorySlice,
     search:SearchSlice,
  },
})