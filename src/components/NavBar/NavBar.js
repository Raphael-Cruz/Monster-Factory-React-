import React from "react";
import '../NavBar/Navbar.css';
import {MenuItems} from "./MenuItems";
import { Button } from "./Button";




class Navbar extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavBarItems">
        <a style={{textDecoration: 'none'}} href={"/home"} ><h1 className="navbar-logo text-nowrap">Monster Factory</h1></a>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                              
                            </li>
                            
                        )
                    })}
                </ul>
        <Button> JOIN </Button>
      </nav>
    );
  }
}

export default Navbar;
