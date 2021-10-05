import React from 'react';
import shop from "./shop.png";
import Image from "./Image";
import Sdata from "./Sdata";
import "./Image.scss";

const Rent = () => {
    return (
      
            <>

            <div className="row my-5">
            <div className="col-10 mx-auto">
         <div className="heading5"> <p>Try before you buy</p></div>
        </div>
        </div>
        
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                            
                            { Sdata.map((val, ind) => {

                                return <Image key={ind}
                                img={val.img} 
                                title={val.title}
                              heading={val.heading}
                                 /> } )}
                     </div>      
                 </div>
             </div>
        </div>


            </>


        
    )
}

export default Rent

