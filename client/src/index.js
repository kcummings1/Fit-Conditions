import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
//import jquery from "jquery";
import "bootstrap/dist/js/bootstrap.min.js";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

// Our Components
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
//import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import withAuth from './components/withAuth';
import Indoor from "./pages/Indoor";
import Outdoor from "./pages/Outdoor";

// window.jQuery = window.$ = require("jquery/dist/jquery.min.js");
// require("bootstrap/dist/js/bootstrap.min.js");

// Here is if we have an id_token in localStorage
if (localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("id_token")}`;
}

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile" component={withAuth(Profile)} />
      <Route exact path="/" component={Home} />
      <Route exact path="/indoor" component={Indoor} />
      <Route exact path="/outdoor" component={Outdoor} />
      <Footer />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
