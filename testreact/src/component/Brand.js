import React from 'react';
import { Container } from "react-bootstrap";
import Zapier_logo from './Zapier_logo.svg';
import airtable from './airtable.png';
import pepsi from './pepsi.svg';
import dunkin from './dunkin.png';
import hub from "./hub.svg";


const Brand = () => {
    return (
        <>
        <Container>
        <div className="my-5 pt-5">
         <div className="heading_bold"> <h3 className="text-center pb-5 font-weight-bolder"> Brands with us </h3></div>
<div class="row">
  
<div class="col-xs-10 col-sm-6 col-md-3 text-center">
<img src={pepsi}  alt="pepsi logo" height="160px" width="150px" />
</div>
<div class="col-xs-10 col-sm-6 col-md-3 text-center">
<img src={dunkin} className="img-fluid animated"  alt="dunkin logo"  height="145px" width="150px" />
    </div>
    <div class="col-xs-10 col-sm-6 col-md-3 text-center">
    <img src={airtable} alt="airtable logo"  height="145px" width="150px"/>
</div>
<div class="col-xs-10 col-sm-6 col-md-3 text-center">
<img src={Zapier_logo} className="img-fluid animated"  alt="zapier logo"  height="150px" width="150px"/>
    </div>
  
            
         
    </div>
    </div>

        
        </Container>
        </> 
    )
}

export default Brand
