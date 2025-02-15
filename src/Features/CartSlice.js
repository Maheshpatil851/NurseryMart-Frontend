import { autoBatchEnhancer, createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: [
    {
        "productId": 16,
        "name": "KAshmiri Apple Bor",
        "description": "new",
        "price": 40,
        "discountPrice": 0,
        "categoryId": 2,
        "sku": "",
        "stockQuantity": 1000,
        "imageUrl": "https://m.media-amazon.com/images/I/81Cj028MpTL._AC_UF1000,1000_QL80_.jpg",
        "isActive": false,
        "createdAt": "0001-01-01T00:00:00",
        "modifiedAt": null,
        "trialEndDate": null,
        "isOnSale": true,
        "rating": 0,
        "reviewsCount": 0,
        "brand": "Kashmiri",
        "isFeatured": true,
        "trailId": 39
    },
    {
        "productId": 23,
        "name": "Apple Plant (Kashmiri Variety)",
        "description": "A high-yielding Kashmiri variety apple plant, ideal for orchards or home gardens. Grows best in temperate climates.",
        "price": 249.99,
        "discountPrice": 199.99,
        "categoryId": 2,
        "sku": "APP-12345-KASH",
        "stockQuantity": 50,
        "imageUrl": "https://m.media-amazon.com/images/I/81Cj028MpTL._AC_UF1000,1000_QL80_.jpg",
        "isActive": true,
        "createdAt": "2025-01-31T00:00:00",
        "modifiedAt": null,
        "trialEndDate": null,
        "isOnSale": true,
        "rating": 4.8,
        "reviewsCount": 85,
        "brand": "Kashmiri Farms",
        "isFeatured": false,
        "trailId": null
    },
    {
        "productId": 26,
        "name": "Apple Tree (Kashmiri Variety)",
        "description": "A high-yielding Kashmiri variety apple tree, perfect for orchards or home gardens. Grows best in temperate climates.",
        "price": 249.99,
        "discountPrice": 199.99,
        "categoryId": 3,
        "sku": "APP-12345-KASH",
        "stockQuantity": 30,
        "imageUrl": "https://nurserylive.com/cdn/shop/products/nurserylive-mango-mango-tree-pairi-grafted-plant_512x512.jpg?v=1634223745",
        "isActive": true,
        "createdAt": "2025-01-31T00:00:00",
        "modifiedAt": null,
        "trialEndDate": null,
        "isOnSale": true,
        "rating": 4.7,
        "reviewsCount": 110,
        "brand": "Kashmiri Farms",
        "isFeatured": false,
        "trailId": null
    }
],
  count : 0 ,
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state ,actions) => {
      state.product.push(actions.payload);
      state.count = state.count + 1;
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