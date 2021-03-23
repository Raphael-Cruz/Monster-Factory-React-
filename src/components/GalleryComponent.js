import React from 'react';
import { IMAGES } from './shared/images';

const images = IMAGES;
function Gallery() {
    return(

<div className="backgroundGallery">
            <h2 className="text-center pt-3">MONSTER GALLERY</h2>
    
    <div className="gallery-image">
        <div className="img-box">
        <img className="img-gallery" src={images.gallery1.image} alt="" />
        
        </div>
        <div className="img-box">
        <img className="img-gallery" src={images.gallery2.image} alt="" />
        
        </div>
        <div className="img-box">
        <img className="img-gallery" src={images.gallery3.image} alt="" />
        
        </div>
        <div className="img-box">
        <img className="img-gallery" src={images.gallery4.image} alt="" />
        
        </div>

        <div className="img-box">
        <img className="img-gallery" src={images.gallery5.image}  alt="" />
        
        </div>
    
    </div>
  </div>
    );
}

export default Gallery;