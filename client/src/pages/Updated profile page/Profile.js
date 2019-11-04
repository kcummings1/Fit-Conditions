import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';
import weather from "./img/weather.jpeg";
import outdoor from "./img/outdoor.jpeg";
class Profile extends Component {

  state = {
    username: "",
    email: ""
  };

  // componentDidMount() {
  //   API.getUser(this.props.user.id).then(res => {
  //     this.setState({
  //       username: res.data.username,
  //       email: res.data.email
  //     })
  //   });
  // }

  render() {
    return (
      <section>
      <div className="weather">
  <iframe src={weather} width="100%" height={380} frameBorder={0} style={{border: 0}} allowFullScreen />
</div>

<div className="outdoor">
  <div className="container">
    <h3>Outdoor Workouts</h3>
    <hr />
    <div className="col-md-6">
      <img src= "./img/outdoor.jpeg"  className="img-responsive" />
      
       <p>text about workout?</p>
    <button type="button" className="btn btn-secondary btn-lg">Large button</button>
    </div>
  </div></div>
  <button type="button" className="btn btn-secondary btn-lg">Large button</button>




<div className="indoor">
  <div className="container">
    <h3>Indoor Workouts</h3>
<div className="col-md-6">
  <img src="./img/indoor.jpeg" className="img-responsive" />
  <p>text for indoor workout</p>

</div>
</div>
</div>



<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>



<div className="container Profile">
<h1>On the profile page!</h1>
<p>Username: {this.state.username}</p>
<p>Email: {this.state.email}</p>
<Link to="/">Go home</Link>
</div>

</section>

);


    }
}

export default Profile;

// this with authentication enabled
//export default withAuth(Profile);