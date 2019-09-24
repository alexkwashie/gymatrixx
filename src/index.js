import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
//this provider object allows us to access items from the redux file in the main app below


import './index.css';
import App from './App';

import store from './redux/store';


ReactDOM.render(
    <Provider store={store}> {/* Now can pass in the store into the main application*/}
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Provider>,

    document.getElementById('root'));