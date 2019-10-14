import React from 'react';
import {connect} from 'react-redux';
//use the redux connect to link to the state and grab the list of items to display in the dropdown

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.style.scss';

import CartList from '../cart-list/cart-list.component';


const CartDropDown = ({cartItems}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (<CartList key = {cartItem.id} item={cartItem}/>))
            }
        </div>
        <CustomButton>CHECKOUT</CustomButton>

    </div>
)

//this connects to the redux main state file i.e. cart.reducers to get the current values in the cartItems
const mapStateToProps = ({ cart:{cartItems} }) => ({
     cartItems
})




export default connect(mapStateToProps)(CartDropDown);