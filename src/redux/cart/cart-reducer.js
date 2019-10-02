import CartActionTypes from './cart-types';


const INITIAL_STATE={ //this shows the initial value before the change, ie. being true
    hidden: true
};


const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
            //this takes the current state and checks if there is a change, which became sthe action payload
            default:
                return state;
    }
}

export default cartReducer;

