import React from 'react';
import homeimage from '../img/homeimage.png';

const imgMyimageexample = require('../img/homeimage.png');
const divStyle = {
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${homeimage})`,
  backgroundSize: 'cover'  
};

export default class Mycomponent extends React.Component {
  render() {
    return (
      <div className="cComponent" style={divStyle} >
      
      </div>
    );
  }
}