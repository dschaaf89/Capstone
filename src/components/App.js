
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage';
//import './App.css';
import './default.scss';
import Header from "./Header";
import Registration from '../pages/Registration';
 import InTheKitchenController from './InTheKitchen/InTheKitchenController';
 import CraftingCornerController from './CraftingCorner/CraftingCornerController';
 import AboutMe from './AboutMe/AboutMe';



function App() {
return(
   
  <React.Fragment>
    <Header/>
    <div className="main">
      <Switch>
      
      <Route exact path='/' component={Homepage}/>
      <Route path='/registration' component={Registration}/>
      <Route path='/inthekitchen' component={InTheKitchenController}/>
    </Switch>
    </div>
      
     
  </React.Fragment>
);
   
}

export default App;
