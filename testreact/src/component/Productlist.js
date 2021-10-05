import React from 'react';
import Idata from './Idata';
import Product from './Product';
import "./Product.scss";

const Productlist = () => {
    return (
        <>

            <div className="row my-5">
            <div className="col-10 mx-auto">
           <div className="heading3"> <p> Recently added on Rent</p></div>
        </div></div>
        <div className="container-fluid mb-3 text-center">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-2">
                            
                            { Idata.map((val, ind) => {
                                return <Product key={ind}
                                img={val.img} 
                                title={val.title}
                                para={val.para}   
                                btname={val.btname} 
                                 /> } )}
                     </div>      
                 </div>
             </div>
        </div>


            </>
    )
}

export default Productlist
