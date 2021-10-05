import React from 'react';
import shop from "./shop.png";
import { Card } from 'react-bootstrap';
import Idata from './Idata';
import "./Product.scss";
import {BsStarFill}  from "react-icons/bs";
import {Link} from "react-router-dom";

const Product = (props) => {
    return (<>
    
   
    
                        <div className="col-md-4 col-10 mx-auto ">
                            <div className="card">
                              <img src={props.img}  className="card-img-top" alt={props.img}  height="260px"/>
                               <div className="card-body">
                                 <div className="card-text3" > <p className="card-title">{props.title}</p></div>
                                 <div className="light"><p className="card-text pb-3"><span className="card-text2" > {props.para}</span>/day <br/>
                               <span className="review"><BsStarFill/></span> 5.0 (40 People used it)
                                  </p></div>
                              <div className="blue"><Link to="#" className="blue">
                                       {props.btname}
                                   </Link>
                                  </div>
                               </div>
                            </div>
                        </div>

                        
                    

      
        
</>
    )
   
}

export default Product
