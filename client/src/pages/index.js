import React, { Component } from "react";
import withAuth from "../components/withAuth";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Background from "./img/running.jpeg";

const divStyle = {
  color: "white",
  backgroundImage: "url(" + Background + ")"
};

class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <section id="main-slider" className="no-margin">
          <div className="carousel slide">
            <div className="carousel-inner">
              <div className="item active" style={divStyle}>
                <div className="container">
                  <div className="row slide-margin">
                    <div className="col-sm-6">
                      <div className="carousel-content">
                        <h2 className="animation animated-item-1">
                          Fit <span>Conditions</span>
                        </h2>
                        <p className="animation animated-item-2">
                          A website that combines weather and fitness
                        </p>
                        {/* read more button */}
                        <a
                          className="btn-slide animation animated-item-3"
                          href="#"
                        >
                          Read More
                        </a>
                      </div>
                    </div>

                    <div className="col-sm-6 hidden-xs animation animated-item-4">
                      <div className="slider-img">
                        <img src="" className="img-responsive" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    {/* feature icons */}
        <div className="feature">
          <div className="container">
            <div className="text-center row">
              <div className="col-md-3">
                <div
                  className="hi-icon-wrap hi-icon-effect wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <i className="fa fa-book" />
                  <h2>Track progress</h2>
                  <p>We keep track of your progress for you.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="hi-icon-wrap hi-icon-effect wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <i className="fa fa-laptop" />
                  <h2>Phone or computer</h2>
                  <p>Log in with your phone or computer</p>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="hi-icon-wrap hi-icon-effect wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="900ms"
                >
                  <i className="fa fa-heart-o" />
                  <h2>Fitness enthusiast</h2>
                  <p>For people who love to workout</p>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="hi-icon-wrap hi-icon-effect wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="1200ms"
                >
                  <i className="fa fa-cloud" />
                  <h2>Weather Friendly</h2>
                  <p>Loves being in the outdoors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
