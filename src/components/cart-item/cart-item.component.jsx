import React from 'react'
import './cart-item.styles.scss';

import {connect} from 'react-redux'; //1. import the connect libry to allow use of the mapDispatchToProps on this component

import {toggleCartHidden} from '../../redux/cart/cart.action';

import {ReactComponent as ShoppingIcon} from '../assets/cart.svg'
import { dispatch } from 'rxjs/internal/observable/range';

const CartLogo = ({toggleCartHidden}) =>( //3. Now pass in toggleCartHidden() as a props
    <div className='cart-icon' onClick= {toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className='item-count'>0</span>
    </div>
);

//2. this allows to use or be able to use as props and run the toggleCartHidden() function in this component
const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () =>dispatch(toggleCartHidden())
})


export default connect(null,mapDispatchToProps)(CartLogo);