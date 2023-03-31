import React from "react";
import "./Productviewpg.scss";
import sampleimage from '../images/sampleimage.jpg'
const Productviewpg = () => {
  return (
    <div className="group-parent">
      <img className="frame-child" alt="" src={sampleimage} />
      <div className="info-container">
        <div className="product-title">Product Title:</div>
        <div className="price">Price:</div>
        <div className="store-location-nw">Store Location: </div>
          <p className="Description">Description:</p>
        </div>
      <div className="image-icons-container">
        <img className="image-1-icon " alt="" src={sampleimage} />
        <img className="image-2-icon " alt="" src={sampleimage}/>
        <img className="image-3-icon " alt="" src={sampleimage}/>
        <img className="image-4-icon " alt="" src={sampleimage} />
      </div>
    </div>
  );
};

export default Productviewpg;
