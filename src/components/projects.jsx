import { Image } from "./image";
import React from "react";


export const Projects = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.text}-${i}`}
                  >
                    <div className="project-slider">
                      <Image
                      title={d.title}
                      location={d.location}
                      images={d.img}
                      />        
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
