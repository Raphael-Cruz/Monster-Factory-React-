import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';


class Header extends Component {
    render() {
        return (
            <React.Fragment>
         
                <Navbar dark sticky="top">
                    <div className="container">
                        <NavbarBrand href="/">Monster Factory</NavbarBrand>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;