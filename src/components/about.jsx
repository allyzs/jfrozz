import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>OUR MISSION</h3>
              <p>{props.data ? props.data.mission : "loading..."}</p>
              <h3>OUR VISION</h3>
              <p>{props.data ? props.data.vison : "loading..."}</p>
              <a
                  href="/img/j-frozz-company-profile.pdf"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Read More
                </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
