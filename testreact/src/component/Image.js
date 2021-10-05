import React from 'react';
import "./Image.scss";
import shop from "./shop.png"
import { Link } from "react-router-dom";

const Image = (props) => {
    return (
        <>
<div className="col-md-4 col-10 mx-auto ">
     <div className="card">
             <div class="example-2">
                   <div class="wrapper">
                       <img src={props.img} alt="img" height="350px"/>
                         <div class="data">
                            <div class="content">
                               <p class="title">{props.title}</p>
           
                                <Link>
              <a href={"#"} class="button">
                {" "}
                Read more
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    <p> {props.heading}</p>
    </div>
        </>
    )
}

export default Image
