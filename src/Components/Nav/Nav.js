import React from "react";
import "./Nav.css";

const Nav = props => (
    <div className = "container-fluid">
            <nav className="navbar navbar-expand-lg navbar bg-light">
                <li className="navbar-brand">Cities of the World Travel Game</li>
                <li className="navbar-brand score">Your Score: {props.score}</li>
            </nav>
     </div>       
);

export default Nav;