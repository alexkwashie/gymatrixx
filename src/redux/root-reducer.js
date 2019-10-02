//The root reducer combines all the reduces into one to be used by the application
import {combineReducers} from 'redux';

import userReducer from './user/user-reducer';

import cartReducer from './cart/cart-reducer';


//add the following reducers here
export default combineReducers({
    user:userReducer,
    cart: cartReducer
})