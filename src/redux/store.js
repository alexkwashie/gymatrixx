import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'; //this loggs each change

import rootReducer from './root-reducer';

const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store;


