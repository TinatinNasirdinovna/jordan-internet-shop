import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    basket: JSON.parse(localStorage.getItem('basket'))||[]
}

export const AddBasketSlice = createSlice({
    name: 'ADDBASKET',
    initialState,
    reducers: {
        addToBasket(state, action) {
            let res = state.basket.find(el => el.id === action.payload.id)
            if(!res) {
                state.basket = [...state.basket, action.payload]
                localStorage.setItem('basket', JSON.stringify([...state.basket, action.payload]))
            } else{
                return  
            }
            localStorage.setItem('basket', JSON.stringify([...state.basket, action.payload]))
        },
        deleteBasket(state, action) {
            state.basket = state.basket.filter(el => el.id !== action.payload)
            localStorage.setItem('basket', JSON.stringify(state.basket.filter(el => el.id !== action.payload)))   
        },
        deleteAllBasket(state, action) {
            localStorage.setItem('basket', JSON.stringify(state.basket.filter(el => el.title.length > 1000)))   
            state.basket = state.basket.filter(el => el.title.length > 1000)         
        }   
    }
})

export const {addToBasket, deleteBasket, deleteAllBasket} = AddBasketSlice.actions
export default AddBasketSlice.reducer