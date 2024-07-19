import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  man: [],
  woman: [],
  kids: [],
  search: [],
  details: {}
};

export const AddProductSlice = createSlice({
  name: "ADDPRODUCT",
  initialState,
  reducers: {
    addToProduct(state, action) {
      localStorage.setItem(
        "product",
        JSON.stringify([...state.product, action.payload])
      );
      state.product = [...state.product, action.payload];
      console.log(state.product, 'product')
    },
    deleteProduct(state, action) {
      localStorage.setItem(
        "product",
        JSON.stringify(state.product.filter((el) => el.id !== action.payload))
      );
      state.product = state.product.filter((el) => el.id !== action.payload);
    },
    categoryMan(state,action) {
      state.man = state.product.filter(el => el.category === 'man')
    },
    categoryWoman(state,action) {
      state.woman = state.product.filter(el => el.category === 'woman')
    },
    categoryKids(state, action) {
      state.kids = state.product.filter(el => el.category === 'kids')
    }, 
    searchElem(state, action) {
      state.search = state.product.filter(el => el.title === action.payload)
    },
    detailsProduct(state, action) {
      state.details = state.product.find(el => el.id === action.payload.id)
    }
  },
});

export const { addToProduct, deleteProduct,categoryMan, categoryWoman, categoryKids, searchElem, detailsProduct } = AddProductSlice.actions;
export default AddProductSlice.reducer;
