import React from 'react';
import Food from './../../assets/Pasta.jpg';
import Craft from './../../assets/Wreaths.jpg';
import AboutMe from './../../assets/AboutMe.jpg';
import Travel from './../../assets/Travel.jpeg';

import CraftStore from "./../../assets/Craft-Store.jpg";

const Directory = props => {
  return(
    <div className="Directory">
      <div className="wrap">
        <div 
        className="item"
        style={{
          backgroundImage:`url(${Food})`
        }}>
          <a>InTheKitchen</a>
        </div>

         <div 
        style={{
          backgroundImage:`url(${Craft})`
        }}>
          <a>CraftingCorner</a>
        </div>

        <div 
        style={{
          backgroundImage:`url(${Travel})`
        }}>
          <a>MyGypsyHeart</a>
        </div>



         <div 
        style={{
          backgroundImage:`url(${AboutMe})`
        }}>
          <a>AboutMe</a>
        </div>



         <div 
        style={{
          backgroundImage:`url(${CraftStore})`
        }}>
          <a>CraftStore</a>
        </div>
      </div>
    </div>
  )
}

export default Directory;
