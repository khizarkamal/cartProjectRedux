import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import cartItems from "../../cartItems";

const url = " https://course-api.com/react-useReducer-cart-project";

const initialState = {
    cartItems: [],
    amount: 5,
    total: 0,
    isLoading: true
}


export const getCartItems = createAsyncThunk('cart/getCartItems',()=>{
    return fetch(url).then((resp)=>resp.json()).catch((error)=>console.log(error));
});

const cartSlice = createSlice({
    name: 'cart', 
    initialState,
    extraReducers:{
        [getCartItems.pending]: (state)=>{
            state.isLoading = true
        },
        [getCartItems.rejected]: (state)=>{
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state,action)=>{
            console.log(action);
            state.isLoading = false
            state.cartItems = action.payload
        }
    },
    reducers: {
        clearCart: (state)=>{
            state.cartItems = []
        },
        removeItem: (state,action)=>{
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item)=>{
                return item.id !== itemId
            })
        },
        increase: (state,action)=>{
            const itemId = action.payload;
            const cartItem = state.cartItems.find(item=>item.id === itemId);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state,action)=>{
            const itemId = action.payload;
            const cartItem = state.cartItems.find(item=>item.id === itemId);
            cartItem.amount = cartItem.amount - 1;
        },
        calulateTotals: (state)=>{
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item)=>{
                amount += item.amount;
                total += item.amount * item.price
            })
            state.amount = amount;
            state.total = total;
        }
    }

});
// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calulateTotals } =  cartSlice.actions;
export default cartSlice.reducer; 
