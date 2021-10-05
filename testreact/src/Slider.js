import React from 'react';
import one from "./one.jpg";
import try2 from "./try2.jpg";
import product from "./product.jpg";


const Slider = () => {
    return (
        <>
         <div className="my-5">
            <h3 className="tab-center">Try before you Buy</h3>
        </div>
         <div className="container-Fluid nav-bg">
         <div className="col-10 mx-auto">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={try2} className="d-block w-100" alt="..."  height="400px" width="400px"/>
      <div className="carousel-caption d-none d-md-block">
      <h5>Recently added items for rent</h5>
       
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={one} className="d-block w-100" alt="..."  height="400px" width="400px"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Recently added items for rent</h5>
      
      </div>
    </div>
    <div className="carousel-item">
      <img src={product} className="d-block w-100" alt="..."  height="400px" width="400px"/>
      <div className="carousel-caption d-none d-md-block">
      <h5>Recently added items for rent</h5>
       
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
        </div> </>
    )
}

export default Slider
