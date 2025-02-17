import { autoBatchEnhancer, createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: [],
  count : 0 ,
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      console.log(action)
      const newItem = action.payload;
      const itemExists = state.product.some(item => item.productId === newItem.productId);
      console.log(itemExists )

      if (!itemExists) {
        state.product.push(newItem);
        state.count += 1;
      console.log(state.count)

      } 
    },
    removeItemFromCart: (state ,actions) => {
      const index = state.product.findIndex(item => item.productId == actions.payload);
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

export const { addItemToCart, removeItemFromCart, Clear ,get} = CartSlice.actions

export default CartSlice.reducer