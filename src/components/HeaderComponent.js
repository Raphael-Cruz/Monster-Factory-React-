import React, { Component } from "react";
import '../App.css';
import NavBar from './NavBar/NavBar';


//
class Header extends Component {
  constructor(props) {
    super(props);

    this.TogglerNav = this.TogglerNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  TogglerNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <>
        <NavBar />
      </>
    );
  }
}

export default Header;
