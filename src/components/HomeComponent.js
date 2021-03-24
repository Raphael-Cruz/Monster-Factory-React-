import React from 'react';
import {IMAGES} from './shared/images';
import '../App.css';


const images = IMAGES;

const Home = () => {
    return (
      <div>
      <img className="HomeImage" src={images.home.image} alt="" />
      </div>
    );
  }


export default Home;