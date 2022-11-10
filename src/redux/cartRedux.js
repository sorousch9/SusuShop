import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalCount: 0,
    tax: 0,
    subAmount: 0,
    totalAmount: 0,
  },
  reducers: {
    addProduct: {
      reducer: (state, action) => {
        let cartIndex = state.products.findIndex(
          (product) => product._id === action.payload._id
        );
        if (cartIndex >= 0) {
          state.products[cartIndex].quantity += 1;
        } else {
          state.products.push({ ...action.payload, quantity: 1 });
        }
      },
    },
    getCartProducts: (state) => {
      return {
        ...state,
      };
    },
    getCartCount: (state) => {
      let cartCount = state.products.reduce((total, product) => {
        return product.quantity + total;
      }, 0);
      state.totalCount = cartCount;
    },
    getSubTotal: (state) => {
      state.subAmount = state.products.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0);
    },

    incrementQuantity: (state, action) => {
      let index = state.products.findIndex(
        (product) => product._id === action.payload
      );
      state.products[index].quantity += 1;
    },
    decrementQuantity: (state, action) => {
      let index = state.products.findIndex(
        (product) => product._id === action.payload
      );
      if (state.products[index].quantity <= 0) {
        state.products[index].quantity = 0;
      } else {
        state.products[index].quantity -= 1;
      }
    },
    removeProduct: (state, action) => {
      let index = state.products.findIndex(
        (product) => product._id === action.payload
      );
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
    calculateTax: (state) => {
      // 19% => action.payload : The price for merchandise purchased in Germany includes a 19% Value Added Tax (VAT). The VAT can be refunded if the merchandise is purchased and exported by a customer whose residence is outside the European Union.
      let totalTax = (19 / 100) * state.subAmount;
      state.tax = totalTax;
    },
    getTotalAmount: (state) => {
      state.totalAmount = state.subAmount + 3.50;
      // state.totalAmount = state.tax + state.subAmount;
    },
  },
});
export const {
  calculateTax,
  getTotalAmount,
  addProduct,
  incrementQuantity,
  decrementQuantity,
  removeProduct,
  getCartProducts,
  getCartCount,
  getSubTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
