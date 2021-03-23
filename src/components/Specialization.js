import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Col } from 'reactstrap';
import classnames from 'classnames';
import {IMAGES} from './shared/images';
import '../App.css';


const images = IMAGES;

const Specialization = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="specBackground">
        <div className="container p-5">
        <Nav tabs>
            <NavItem>
            <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
            >
                Body Building
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
            >
            Powerlifting
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => { toggle('3'); }}
            >
                CrossFit
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
                className={classnames({ active: activeTab === '4' })}
                onClick={() => { toggle('4'); }}
            >
            Gym
            </NavLink>
            </NavItem>
        </Nav>
        <div className="row row-content m-5" style={{border: 'none'}}>
        <TabContent activeTab={activeTab}>
        
            <TabPane fade show active  tabId="1">
            
                <Col sm="12">
                <div className="media  p-3">
                    <img id="bodyimg" className="d-flex mr-3 img-thumbnail" src={images.specialization1.image} alt="" />
                                
                        <div className="media-body align-self-center">     
                        <h3 className="d-none d-sm-block ">Body Building</h3>
                            <p className="d-none d-md-block ">The process of developing the musculature of the body through specific types of diet and physical exercise, such as weightlifting, especially for competitive exhibition.</p>
                        </div>
                </div>
                </Col>
            
            </TabPane>
            <TabPane fade tabId="2">
            
                <Col sm="12">
                <div className="media  p-3">
                    <img id="bodyimg"  className="d-flex mr-3 img-thumbnail" src={images.specialization2.image} alt=""/>
                                
                        <div className="media-body align-self-center">  
                            <h3 className="d-none d-sm-block "> Powerlifting</h3>
                            <p class="d-none d-md-block p-1"> The sport of lifting heavy weights in three different ways from a standing or lying position, but without lifting the weights above the head:
                                Powerlifting is comprised of three lifts the squat, the bench press and deadlift.</p>
                    </div>
                </div>
                </Col>
            
            </TabPane>
            <TabPane fade tabId="3">
            
                <Col sm="12">
                <div className="media  p-3">
                    <img id="bodyimg"  className="d-flex mr-3 img-thumbnail" src={images.specialization3.image} alt=""/>
                                
                        <div className="media-body align-self-center">     
                        <h3 className="d-none d-sm-block ">CrossFit</h3>
                        <p class="d-none d-md-block  m-1" > CrossFit is a workout methodology that incorporates functional movements from different disciplines like strength training, gymnastics and sports, performed at different intensities and for varied time domains.</p>
                        </div>
                </div>
                </Col>
            
            </TabPane>
            <TabPane fade tabId="4">
            
                <Col sm="12">
                <div className="media p-3">
                    <img id="bodyimg"  className="d-flex mr-3 img-thumbnail" src={images.specialization4.image} alt=""/>
                                
                        <div className="media-body align-self-center">     
                        <h3 className="d-none d-sm-block ">Gym</h3>
                        <p class="d-none d-md-block "> No Pain, No Gain, pure and simple weight lifting.</p>
                        </div>
                </div>
                </Col>
                
            
            </TabPane>
        
        </TabContent>
        </div>
        </div>
    </div>
  );
}

export default Specialization;
