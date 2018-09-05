import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <h1>(Insert hilarious title)</h1>
                <Link to="/StumbleGrumble"><button>Get Started</button></Link>
            </header>
            
        )
    }
};

export default Header;