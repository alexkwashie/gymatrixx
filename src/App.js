import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import Homepage from './pages/homepage/homepage.components';

const TopsPage = () =>(
  <div>
    <h1>This is the Tops Page</h1>
  </div>
);

const Fleece = () =>(
  <div>
    <h1>This is the Tops/Fleece page</h1>
  </div>
);

const RedFleece = (props) =>(
  <div>
    <h1>This is the red fleece page : {props.match.params.RedFleeceid}</h1> {/*this is to pass in a unique id from a database*/}
  </div>
);


function App() {
  return (
    <div>
      <Switch>
      <Route  exact path='/' component={Homepage}/>
      <Route  exact path='/tops' component={TopsPage}/>
      <Route  exact path='/tops/fleece' component={Fleece}/>
      <Route  path='/tops/fleece/:RedFleeceid' component={RedFleece}/>
      {/*exact={true} means go to the exact url location*/}
      {/*<Switch> means, render if ther is a match*/}
      </Switch>
    </div>
  );
}


export default App;
