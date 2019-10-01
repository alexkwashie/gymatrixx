import React from 'react';
import './header.styles.scss'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/g-logo.svg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';
import CartLogo from '../cart-item/cart-item.component'



const Header = ({currentUser}) =>(
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
    </div>

)

/*This is using the connect function from redux to link in the state from the root-reducer which hold a stander
state object whic can be used through out the application */

const mapStateToProps = state =>({
    currentUser: state.user.currentUser //hence this is assigning the state used in this component to the default state in the root-reducer
})


export default connect(mapStateToProps)(Header);