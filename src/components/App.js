import Navbar from './Navbar/Navbar';
import InTheKitchenController from './InTheKitchen/InTheKitchenController';
import CraftingCornerController from './CraftingCorner/CraftingCornerController'
import AboutMe from './AboutMe/AboutMe'
import React from 'react'
import './App.css';

function App() {
return(
   
  <React.Fragment>
     <Navbar />
     {/* <InTheKitchenController/> */}
     {/* <CraftingCornerController /> */}
     <AboutMe />
     
  </React.Fragment>
);
   
}

export default App;
