import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import jquery from "jquery";
import "bootstrap/dist/js/bootstrap.min.js";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

// Our Components
import Login from "./pages/login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
//import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

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
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/home" component={Home} />

      <Footer />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
