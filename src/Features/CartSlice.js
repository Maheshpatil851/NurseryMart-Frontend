import { autoBatchEnhancer, createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: [],
  count : 0 ,
}

export const CartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    Increment: (state ,actions) => {
      state.product.Add(actions.payload);
      state.count = state.count + 1;
    },
    Decrement: (state ,actions) => {
      state.product.remove(actions.payload);
      state.count = state.count-1;
    },
    Clear: (state) => {
        state.product =[];
        state.count =0;
    },
    get : () => {

    }
  },
})

// Action creators are generated for each case reducer function
export const { Increment, Decrement, Clear ,get} = CartSlice.actions

export default CartSlice.reducer