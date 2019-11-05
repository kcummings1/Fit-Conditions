import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthService from "./../components/AuthService";
import API from "./../utils/API";
// import Background from "./img/signUp.jpg";
import "./signup.css";

class Signup extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(
      this.state.username,
      this.state.email,
      this.state.password,
      this.state.city,
      this.state.state,
      this.state.zipcode
    )
      .then(res => {
        // once the user has signed up
        // send them to the login page
        this.props.history.replace("/login");
      })
      .catch(err => alert(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    // go to home page after signup
    if (this.Auth.loggedIn()) {
      return <Redirect to="/" />;
    }
    return (
      <div className="sign-up-page">
        <div className="container">
          <h1>Signup</h1>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                className="form-control"
                placeholder="Username goes here..."
                name="username"
                type="text"
                id="username"
                autoComplete="username"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input
                className="form-control"
                placeholder="Email goes here..."
                name="email"
                type="email"
                id="email"
                autoComplete="email"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input
                className="form-control"
                placeholder="Password goes here..."
                name="password"
                type="password"
                id="pwd"
                autoComplete="new-password"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input
                className="form-control"
                placeholder="City goes here..."
                name="city"
                type="text"
                id="city"
                autoComplete="city"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="state">State:</label>
              <input
                className="form-control"
                placeholder="State goes here..."
                name="state"
                type="text"
                id="state"
                autoComplete="state"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="zipcode">Zipcode:</label>
              <input
                className="form-control"
                placeholder="Zipcode goes here..."
                name="zipcode"
                type="number"
                id="zipcode"
                autoComplete="zipcode"
                onChange={this.handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
