import React from "react";
import '../styles/style.sass';

class NavBar extends React.Component{
render() {
    return ( 
     
        <div>
            <a href="/login" className="navbar">Log In</a>
            <a href="/signup" className="navbar">Sign Up</a>
        </div>
        );
    }
}

export default NavBar;