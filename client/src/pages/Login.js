import React, {Component} from 'react';
import AuthService from '../components/AuthService';
import {Link, Redirect} from 'react-router-dom';
import Background from "./img/Login.jpeg";

const divStyle = {
  color: "white",
  backgroundImage: "url(" + Background + ")"
};



class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.Auth.login(this.state.username,this.state.email,this.state.city, this.state.state, this.state.zipcode)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/profile`);
      })
      .catch(err => {
        alert(err.response.data.message)
      });
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    });
  };

  render() {
    if (this.Auth.loggedIn()) {
      return <Redirect to="/" />
    }
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input className="form-control"
                   placeholder="Username goes here..."
                   name="username"
                   type="text"
                   id="username"
                   autoComplete="username"
                   onChange={this.handleChange}/>
          </div> 
           <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input className="form-control"
                   placeholder="Email goes here..."
                   name="email"
                   type="email"
                   id="email"
                   autoComplete="email"
                   onChange={this.handleChange}/>
          </div> 

           {/* <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input className="form-control"
                   placeholder="Password goes here..."
                   name="password"
                   type="password"
                   id="pwd"
                   autoComplete="current-password"
                   onChange={this.handleChange}/>
          </div>  */}
          <div className="form-group">
            <label htmlFor="pwd">City:</label>
            <input className="form-control"
                   placeholder="City goes here..."
                   name="city"
                   type="city"
                   id="cty"
                   autoComplete="current-city"
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd">State:</label>
            <input className="form-control"
                   placeholder="State goes here..."
                   name="state"
                   type="state"
                   id="st"
                   autoComplete="current-state"
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Zipcode:</label>
            <input className="form-control"
                   placeholder="Zipcode goes here..."
                   name="zipcode"
                   type="zipcode"
                   id="zpc"
                   autoComplete="current-zipcode"
                   onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <p><Link to="/signup">Go to Signup</Link></p>
      </div>

    );
  }
}

export default Login;


// $( document ).ready(function() {
//   $.support.cors = true;
//   $.ajaxSetup({ cache: false });
//   var city = '';
//   var hascity = 0;
//   var hassub = 0;
//   var state = '';
//   var nbhd = '';
//   var subloc = '';
//   $('#zip_code').keyup(function() {
//     $zval = $('#zip_code').val();

//     if($zval.length == 5){
//        $jCSval = getCityState($zval, true);
//     }
//   });

// function getCityState($zip, $blnUSA) {
// var date = new Date();
// $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + $zip + '&key=AIzaSyADaczS-tQkN_EPrrT6Iry5SKodujz5IgI&type=json&_=' + date.getTime(), function(response){
//        //find the city and state
// var address_components = response.results[0].address_components;
// $.each(address_components, function(index, component){
// var types = component.types;
// $.each(types, function(index, type){
// if(type == 'locality') {
// city = component.long_name;
// hascity = 1;
// }
// if(type == 'administrative_area_level_1') {
// state = component.short_name;
// }
// if(type == 'neighborhood') {
// nbhd = component.long_name;
// }
// if(type == 'sublocality') {
// subloc = component.long_name;
// hassub = 1;
// }
// });
// });

// //pre-fill the city and state
//       if(hascity == 1){
// $('#city').val(city);
//       } else if(hassub == 1) {
//           $('#city').val(subloc);
//       } else {
//   $('#city').val(nbhd);
// }
// $('#state').val(state);
// //reset
// var hascity = 0;
// var hassub = 0;
//   });
// }
// });