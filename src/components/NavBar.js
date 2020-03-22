import React from "react";
import '../styles/style.sass';

class NavBar extends React.Component{
render() {
    return ( 
        <form>
            <div class="xxx">
            <a href="/login" >Log In</a>
            <a href="/signup">Sign Up</a>
            </div>
        <div className="navbar">
            <div class="nav">
                <a href="/" >Home</a>
            </div>
        </div>
        </form>
        );
    }
}

export default NavBar;