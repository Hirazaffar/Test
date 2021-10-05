import React from 'react';
import "./Feature.css"
const Feature = (props) => {
    return (
        <div className="a-box">
            <div className="a-b-img">
                <img src={props.image}/>
            </div>

        
        <div className="s-b-text">
<h2>{props.title}</h2>
        </div>
        </div>
    )
}

export default Feature
