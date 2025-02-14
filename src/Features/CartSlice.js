import { autoBatchEnhancer, createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: [],
  count : 0 ,
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    Increment: (state ,actions) => {
      state.product.push(actions.payload);
      state.count = state.count + 1;
    },
    Decrement: (state ,actions) => {
      const index = state.items.findIndex(item => item.id === actions.payload.id);
      if (index !== -1) {
        state.product.splice(index, 1);
        state.count = state.count - 1;
      }
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