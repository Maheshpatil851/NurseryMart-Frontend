import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  product: [],
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    create: () => {
      
    },
    update: () => {
      
    },
    remove: () => {

    },
    get : () => {

    }
  },


})

// Action creators are generated for each case reducer function
export const { create, update, remove ,get} = ProductSlice.actions

export default ProductSlice.reducer