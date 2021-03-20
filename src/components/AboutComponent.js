import React, { Component } from 'react';
import '../App.css';
import {IMAGES} from './shared/images';


class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
            images:IMAGES
        }
    }

    render() {
  return (

    <div className="backgroundAbout">
      <div className="container">
        <div className="row row-content" id="box">
          <div className="col text-justify">
            <h2 className="font-weight-bold"> ABOUT US</h2>
            <hr />
            <p>
              At the Monster Factory, we’re about real gains. Our no-nonsense,
              results-driven culture was built on a history rooted in
              weightlifting culture. Monster Factory has became an nationally
              recognized brand known for its commitment to health, strength, and
              fitness. We want to help you live a fit and healthy lifestyle!{" "}
            </p>
          </div>
          <div key={this.state.images.about.id} className="col-4"  >
              <img src={this.state.images.about.image} alt="logo" width='400px' height='400px' />
         
          </div>
          <div className="col text-justify">
            <h2 className="font-weight-bold">OUR MISSION</h2>
            <hr />
            <p>
              {" "}
              We are the gym that makes fitness totally possible to every BODY.
              We promise to help people from all walks of life achieve their
              individual health and fitness goals — no matter their shape, size,
              age, or experience level. Our culture isn’t that of these
              corporate gyms. When you walk in the door you’re here to work,
              sweat, and burn. At Monster Factory, great shape is an authentic
              passion, and we don’t back down from the challenge to push our
              bodies to the limit.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    );
   }
}

export default About;
