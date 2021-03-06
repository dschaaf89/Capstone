
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage';
//import './App.css';
import './default.scss';
import Header from "./Header";
import Footer from './../components/Footer';
import Registration from '../pages/Registration';
import InTheKitchenController from './InTheKitchen/InTheKitchenController';
import CraftingCornerController from './CraftingCorner/CraftingCornerController';
import ContactForm from './ContactUs/ContactForm';
 //import MyGypsyHeart from '../pages/MyGypsyHeart';
 //import ContactMe from '../pages/ContactMe';
 //import CraftStore from '../pages/CraftStore';
  import Signin from './../Signin';
import AboutmeController from './AboutMe/AboutmeController';
import MyGypsyHeartController from './MyGypsyHeart/MyGypsyHeartController';
import CraftStore from './CraftStore';



function App() {
return(
   
  <React.Fragment>
    <Header/>
    <div className="main">
      <Switch>
      
      <Route exact path='/' component={Homepage}/>
      <Route path='/registration' component={Registration}/>
      <Route path='/inthekitchen' component={InTheKitchenController}/>
      <Route path='/craftingcorner' component={CraftingCornerController}/>
      <Route path='/contactme' component={ContactForm}/>
      <Route path='/signin' component={Signin}/>
      <Route path='/mygypsyheart' component={MyGypsyHeartController}/>
      <Route path='/aboutme' component={AboutmeController}/>
      {/* <Route path='/contactme' component={ContactMe}/> */}
      <Route path='/craftstore' component={CraftStore}/>
    </Switch>
    </div>
    <div id="footer">
     <Footer/>
     </div>
  </React.Fragment>
);
   
}

export default App;
