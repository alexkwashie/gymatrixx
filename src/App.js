import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';

import shopPage from './pages/shop/shop.component'
import Homepage from './pages/homepage/homepage.components';
import Header from './components/header/header.component'
import SignInandSingUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils'

class App extends React.Component{
    constructor(){
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    //when page mounts this sets unsubscribeFromAuth to the logged user details  and also to currentUser object
    componentDidMount(){
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
            console.log(user)
        })
    }

    //this is to cancel any previous connections etc. so its used for signing out logged user
    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

        render(){

            const currentUser= this.state.currentUser

            return (
                <div>
                    <Header currentUser = {currentUser}/>
                    <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={shopPage}/>
                    <Route path='/signin' component={SignInandSingUp}/>
                    {/*exact={true} means go to the exact url location*/}
                    {/*<Switch> means, render if there is a match*/}
                    {/*<Link to='/tops'>Tops</Link> */}
                    </Switch>
                </div>
            );
        }

}

export default App;
