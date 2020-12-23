import React from 'react';
import Food from './../../assets/Pasta.jpg';
import Craft from './../../assets/Wreaths.jpg';
import AboutMe from './../../assets/AboutMe.jpg';
import Travel from './../../assets/Travel.jpeg';
import CraftStore from "./../../assets/Craft-Store.jpg";
import './styles.scss';
import { Link } from 'react-router-dom';


{/* <Link to = {item.link}>
                                <a className = {item.cName} href = {item.cName} >
                                   {item.title}
                               </a>
                               </Link> */}

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${Food})`
          }}
        >
          <Link to ='/inthekitchen'>
            InTheKitchen
          </Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Craft})`
          }}
        >
          <Link to ='/craftingCorner'>
            CraftingCorner
          </Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Travel})`
          }}
        >
          <Link to ='/myGypsyHeart'>
            MyGypsyHeart
          </Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${AboutMe})`
          }}
        >
         <Link to="aboutMe">
           AboutMe
         </Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${CraftStore})`
          }}
        >
          <Link to="/craftstore">
            Store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;
