import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'

class Header extends Component {
    render() {
        return (
            <header>
                <div className="wrapper">
                    <h1>Stumble Grumble</h1>
                    <h4>Grab a bite. Thank yourself in the A.M.</h4>
                    <figure><img className="bgLogo" src={logo} alt="Vomitting Burger Logo for StumbleGrumble"/></figure>
                    <Link className="start" to="/StumbleGrumble"><span>Get Started</span></Link>
                </div>
            </header>
            
        )
    }
};

export default Header;