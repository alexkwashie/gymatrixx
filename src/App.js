import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import Homepage from './pages/homepage/homepage.components';

const TopsPage = () =>(
  <div>
    <h1>This is the Tops Page</h1>
  </div>
);


function App() {
  return (
    <div>
      <Switch>
      <Route  path='/' component={Homepage}/>
      <Route  path='/tops' component={TopsPage}/>
      {/*exact={true} means go to the exact url location*/}
      {/*<Switch> means, render if ther is a match*/}
      </Switch>
    </div>
  );
}


export default App;
