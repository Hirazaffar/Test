import React from 'react';
import "./home.css";
import  Image  from "./component/Image";
import Header from './component/Header';
import Main from './component/Main';
import Rent from "./component/Rent";
import Productlist from './component/Productlist';
import Footer from './component/Footer';
import Footer2 from './component/Footer2';
import Product from "./component/Product";
import shop2 from "./shop2.svg";
import Brand from './component/Brand';
import hop from "./hop.jpg";
import Slider from "./Slider";
import { FaRegArrowAltCircleRight }  from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import {
    Container,
    Jumbotron,
    Button,
    Form,
    FormControl,
    Row,
    Col,
   
    InputGroup,
    Nav,
  } from "react-bootstrap";
  import Post from "./Post";

  
 

const Home = () => {
    return (
     <>
     
          
         <div className="my-5" > </div>
         <div className="row">
         <div className="col-md-6 col-10 mx-auto">
       
         <div class="row justify-content-center pb-3">
    <div class="col-4 text-center">
    <a  href="#"> Rent </a>
    </div>
    <div class="col-4  col-sm-4 justify-content-end">
    Try before you buy
    </div>
  </div>
         </div></div>
     
           <div className="container contact_div"> 

           <div className="row">
           <div className="col-md-6 col-10 mx-auto pt-3">
           <form>
           <div class="form-control"> Search </div>
   
      </form>
           
           </div>
            </div>
           </div>
           
 
   
<Container>
     <Jumbotron>
        <Productlist/>

            <Rent/>
             <Brand/>
                <Post/>
              </Jumbotron>
                </Container>

                      <Footer2/>
                          <Footer/>
     </>
    )
}

export default Home
