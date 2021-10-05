import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap';
import "./Footer2.scss";
import  bg1 from "./bg1.png";
import { BsVolumeUpFill} from "react-icons/bs"
import { AiTwotonePhone } from "react-icons/ai";
import { BsGeoAlt} from "react-icons/bs";
import shop2 from "../shop2.svg";
import {Button} from "react-bootstrap";

<div class="col-xs-10 col-sm-6 col-md-3 text-center my-3 pt-3"></div>




const Footer2 = () => {
    return (
        <div>
          <Jumbotron className="footer_new">
          <Container>
          <div className="row my-5">
            <div className="col-md-6 col-10 mx-auto">

    <div className="arrow2"><BsVolumeUpFill/></div>

    <div className="textbold"> <p>Wanna Earn with STRABL?</p></div>

    </div> 
  

    </div> 


         </Container>

    </Jumbotron>
        <Jumbotron className="footer_black">
<Container>
<div className="my-5 pt-2">
      
<div class="row row-cols-4 text-center pt-2 pb-2">
        
      <div className="text2"><div class="col">
      <img
                 src={"https://strabl.com/images/logo.png"}
                 alt="STRABL"
                 width="120px"
                height="34px"
               /> 
      </div>
      </div>
      
      
       <div className="text2">
       
       <div class="col"> Newsletter
      
       <div className="text"> Subscribe our Newsletter to get updates</div>
    
       
       </div>  
       </div>
          <div className="text2"> <div class="col"> Useful Links
          
          <div className="text3"> 
          <p className="margin__left">About us</p>
            <p className="margin__left">Green Credentials </p>
          <p className="margin__left">FAQ </p>
           <p className="margin__left">Item Protection Feature</p> 
            <p className="margin__left">Featured ads </p>
          </div>
          </div></div> 
          <div className="text2">   <div class="col">  Head Office
          
          <div className="text3">   <p className="margin__left"> <span className="phone"><BsGeoAlt/> </span>30 commercial Road, Street 1002 Dubai </p>
       
       <p className="margin__left"> <span className="phone"><AiTwotonePhone/></span> 302334567 </p>
           </div></div>
          </div>
          
          </div> </div> 
         
          </Container>
                  </Jumbotron>
                    </div> )
}

export default Footer2
