import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';

import shopPage from './pages/shop/shop.component'
import Homepage from './pages/homepage/homepage.components';
import Header from './components/header/header.component'
import SignInandSingUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
    return (
        <div>
            <Header/>
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

export default App;
