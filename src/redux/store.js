import { configureStore } from "@reduxjs/toolkit";
import AddProductSlice, { addToProduct } from "./AddProductSlice";
import AddBasketSlice from "./AddBasketSlice";

export const store = configureStore({
    reducer: {
         product: AddProductSlice,
         basket: AddBasketSlice,
    }
})