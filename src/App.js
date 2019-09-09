import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'

import Homepage from './pages/homepage/homepage.components';

const TopsPage = (props) => (
    <div>
        <h1>This is the Tops Page</h1>
        <button onClick={() => props.history.push('/')}>Homepage</button>
    </div>
);

function App() {
    return (
        <div>

            <Route exact path='/' component={Homepage}/>
            <Route path='/tops' component={TopsPage}/> {/*exact={true} means go to the exact url location*/}
            {/*<Switch> means, render if ther is a match*/}
            <Link to='/tops'>Tops</Link>

        </div>
    );
}

export default App;
