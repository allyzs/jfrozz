import React from "react";

export const Image = ({ title, location, images }) => {
  return (
    <div className="portfolio-item">
        {" "}
          <div className="hover-text">
            <h4>{title}</h4>
            <p>{location}</p>
          </div>
          <div className="image-container">
          {images.map((image,index) => (
            <img src={image} alt="test" key={`${title}-${index}`} className="img-responsive" />
          ))}
          </div>

    </div>
  );
};
