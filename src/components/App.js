// import Navbar from './Navbar/Navbar';
// import InTheKitchenController from './InTheKitchen/InTheKitchenController';
// import CraftingCornerController from './CraftingCorner/CraftingCornerController';
// import AboutMe from './AboutMe/AboutMe';
import React from 'react';
import Homepage from '../pages/Homepage';
//import './App.css';
import './default.scss';
import Header from "./Header";

function App() {
return(
   
  <React.Fragment>
    <Header/>
    <div className="main">
    <Homepage/>
    </div>
   
     
  </React.Fragment>
);
   
}

export default App;
