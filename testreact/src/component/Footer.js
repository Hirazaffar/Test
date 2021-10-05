import React from "react";
import "./Footer.scss";
import Privacy from "./Privacy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    
    faInstagram,
    faFacebook,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
    Container,
    Jumbotron,
    Button,
    Form,
    FormControl,
    Row,
    Col,
    Image,
    InputGroup,
    Nav,
  } from "react-bootstrap";

const Footer = () => {
    return (
        
       <footer className="footer">

            <div className="footer-container">
           
                <div className="item1">
                    <Privacy />
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} STRABL. All Rights
                        Reserved.
                    </span>
                </div>
                <a
                    href="https://github.com/sudiptob2/simple-react-footer"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                    href="http://fb.com/sudiptob2"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faTwitter} />
                </a>

                {false && <Privacy click={true} />}
            </div>
           
            
        </footer>
       
    );
};

export default Footer;
