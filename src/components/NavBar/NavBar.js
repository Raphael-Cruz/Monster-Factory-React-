import React from "react";
import {MenuItems} from "./MenuItems";
import { Button } from "./Button";
import { IMAGES } from "../shared/images";
import '../NavBar/Navbar.css';


const images = IMAGES;
class Navbar extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavBarItems">
        <a style={{textDecoration: 'none'}} href={"/home"} ><img src={images.logo.image} alt="" style={{width:'100px', height:'100px', paddingTop:'10px'}} /></a>
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
