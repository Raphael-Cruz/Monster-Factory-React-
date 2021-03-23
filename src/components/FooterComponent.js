import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div class="col-4 col-sm-4">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/specialization'>Specialization</Link></li>
                        
                        </ul>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h5>Links</h5>
                        <ul class="list-unstyled">
                            <li><a href="/gallery">Gallery</a></li>
                           <li><a href='/contact'>Contact Us</a></li>
                           
                        
                        </ul>
                    </div>
                    <div className="col-4 col-sm-4 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        
                    </div>
                  
                </div>
            </div>
        </footer>
    );
}

export default Footer;