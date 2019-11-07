import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import AuthService from "../AuthService";

class Navbar extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();

    $(".navbar-nav .nav-link").click(function() {
      console.log("Here");
      $(".navbar-nav .nav-link").removeClass("active");
      $(this).addClass("active");
    });
  }

  render() {
    if (this.Auth.loggedIn()) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="index">
            <h1>
              <span>Fit</span>Conditions
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto" id="mainNav">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" href="home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="profile">
                  Profile
                </a>
              </li>

              <li className="nav-item" role="presentation">
                <a className="nav-link" href="indoorWorkouts.html">
                  Indoor Workouts
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="outdoorWorkouts.html"
                  role="presentation"
                >
                  Outdoor Workouts
                </a>
              </li>
              <li className="nav-item">
              {/* this is not using the Link component to logout or user and then refresh the application to the start */}
              <a
                className="nav-link"
                href="/home"
                onClick={() => this.Auth.logout()}
              >
                Logout
              </a>
            </li>
            </ul>
          </div>
        </nav>
      );
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="Home">
          <h1>
            <span>Fit</span>Conditions
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" id="mainNav">
            <li className="nav-item" role="presentation">
              <a className="nav-link active" href="Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="signup">
                Sign Up
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="profile">
                Profile
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="login">
                Log In
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="indoorWorkouts">
                Indoor Workouts
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="outdoorWorkouts"
                role="presentation"
              >
                Outdoor Workouts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
