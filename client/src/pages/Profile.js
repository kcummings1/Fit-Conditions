import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';

class Profile extends Component {

  state = {
    // username: "",
    // email: "",
    city: "",
    state: "",
    zipcode: "",
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        // username: res.data.username,
        // email: res.data.email,
        city: res.data.city,
        state: res.data.state,
        zipcode: res.data.zipcode
      })
    });
  }

  render() {
    return (
      <div className="container Profile">
        <h1>On the profile page!</h1>
        {/* <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p> */}
        <p>City: {this.state.city}</p>
        <p>State: {this.state.state}</p>
        <p>Zipcode: {this.state.zipcode}</p>
        <Link to="/">Go home</Link>
      </div>
    )
  }
}

export default withAuth(Profile);