import React from "react";
import {MDBContainer, MDBFooter} from "mdbreact";
import "./Footer.css";

const Footer = props => (

    <MDBFooter className="footer font-small pt-4 mt-4">
        <div className="foot-text text-center py-3">
            <MDBContainer fluid>&copy; {new Date().getFullYear()}  K.Mills &hearts; <a href="https://github.com/kmills2274/react-clicky-game">Github Repo </a></MDBContainer>
        </div>
    </MDBFooter>

);

export default Footer;