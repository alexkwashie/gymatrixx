import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import shopPage from './pages/shop/shop.component'


import Homepage from './pages/homepage/homepage.components';


function App() {
    return (
        <div>

            <Route exact path='/' component={Homepage}/>
            <Route path='/shop' component={shopPage}/>
            {/*exact={true} means go to the exact url location*/}
            {/*<Switch> means, render if there is a match*/}
            {/*<Link to='/tops'>Tops</Link> */}

        </div>
    );
}

export default App;
