import React from 'react';
import Food from './../../assets/Pasta.jpg';
import Craft from './../../assets/Wreaths.jpg';
import AboutMe from './../../assets/AboutMe.jpg';
import Travel from './../../assets/Travel.jpeg';
import CraftStore from "./../../assets/Craft-Store.jpg";
import './styles.scss';
import { Link } from 'react-router-dom';

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
          <a href = '/inthekitchen'>
            InTheKitchen
          </a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Craft})`
          }}
        >
          <a href='/craftingcorner'>
            CraftingCorner
          </a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Travel})`
          }}
        >
          <a href ='/mygypsyheart'>
            MyGypsyHeart
          </a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${AboutMe})`
          }}
        >
          <a href='/aboutme'>
            AboutMe
          </a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${CraftStore})`
          }}
        >
          <a href='/store'>
            Store
          </a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
