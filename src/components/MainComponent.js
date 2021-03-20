import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import './NavBar/Navbar.css';
import {Switch, Route, Redirect } from 'react-router-dom';
import Specialization from './Specialization';






class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
           
        }
    }



    render() {
        return (
            <div>
              <Header />
              <Switch>
                  <Route path="/home" component={Home} />
                  <Route path='/about' component={About} />
                  <Route path='/specialization' component={Specialization} />
                  <Redirect to='/home' />
              </Switch>
              
              <Footer />
            </div>
        );
    };
}

export default Main;