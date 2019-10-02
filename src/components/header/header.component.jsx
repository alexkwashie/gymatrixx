import React from 'react';
import './header.styles.scss'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/g-logo.svg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';
import CartLogo from '../cart-item/cart-item.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component';



const Header = ({currentUser, hidden}) =>(
    <div className='header' >
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
        <Link className='option' to="/shop">
            SHOP
        </Link>
        <Link className='option' to="/contact">
            CONTACT
        </Link>
        {
            currentUser ? (
            <div className = 'option' onClick ={()=>auth.signOut()}>SIGN OUT</div>
            ) : (
            <Link className='option' to="/signin">
                SIGN IN
            </Link> )
        }

        <CartLogo />
        </div>
        {/*because hidden is set to true in the cart reducer, the below will not show it, but taggle it to show it*/}
        {
            hidden ? null: <CartDropDown/>
        }

    </div>

)

/*This is using the connect function from redux to link in the state from the root-reducer which hold a standard
state object which can be used through out the application */

const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) =>({ //another way of geting values from the reference to the component.
    currentUser,
    hidden
    //this is state in this component references to the default state from the root-reducer
    //Not it can be passed in as a props and its value can be used to make changes in the application
})


export default connect(mapStateToProps)(Header);