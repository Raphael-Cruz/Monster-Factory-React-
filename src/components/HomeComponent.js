import React from 'react';
import {IMAGES} from './shared/images';
import '../App.css';


const images = IMAGES;

const Home = () => {
    return (
      <div className="HomeImage">
      <img src={images.home.image} alt="" />
      </div>
    );
  }


export default Home;