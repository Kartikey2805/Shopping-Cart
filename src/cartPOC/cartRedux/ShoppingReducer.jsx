import React from 'react';
import { products } from '../data/data';

let initialState = {
    products,
    cartItems : 0
}

function ShoppingReducer(state=initialState,action) {
    switch(action.type){
        case "add_item":
            return{
                products,
                cartItems : state.cartItems+1
            }
        default : return state;
    }
}

export default ShoppingReducer;
