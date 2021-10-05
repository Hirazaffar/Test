import React from 'react';
import "./Nav.scss";
import { BsJustifyRight } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';



const Navbar = () => {
    return (
        <>

        <div className="container-Fluid nav-bg">
       
            <div className='row'>
                <div className="col-10 mx-auto">
                    
             
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <NavLink className="navbar-brand" to="#">
        
        <img
          src={"https://strabl.com/images/logo.png"}
          alt="STRABL"
          width="100px"
         height="34px"
        /></NavLink>
        
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
       <div className="d-flex">
        <li className="red-color">
         <Button> Login/Signup </Button>
        </li></div>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ENG
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li> <NavLink className="dropdown-item" to="/Login">Login </NavLink></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" ><BsJustifyRight/></a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

   </div>
            </div>
      
        </div>
        </>
    )
}

export default Navbar;
