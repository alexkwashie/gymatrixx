import CartActionTypes from './cart-types';

import {addItemToCart} from './cart.utils';

const INITIAL_STATE={ //this shows the initial value before the change, ie. being true
    hidden: true,
    cartItems: []
};


const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }

        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload) //this takes in the current items in the cart and the new change
            }
            //this takes the current state and checks if there is a change, which becames the action payload
            default:
                return state;
    }
}

export default cartReducer;

