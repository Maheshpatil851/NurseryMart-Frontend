import { configureStore } from '@reduxjs/toolkit'
import { ProductSlice } from '../Features/ProductSlice'
import { CartSlice } from '../Features/CartSlice'

export const store = configureStore({
  reducer: {ProductSlice ,CartSlice},
})