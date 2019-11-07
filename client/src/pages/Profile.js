import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import withAuth from "./../components/withAuth";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import weather from "./img/weather.jpeg";
import outdoor from "./img/outdoor.jpeg";
import indoor from "./img/indoor.jpeg";
import Weather from "./../components/Weather";
import Form from "./../components/Form";

const divStyle = {
  color: "white",
  backgroundImage: "url(" + weather + ")"
};

const API_KEY = "78e5a71d348673c855d828aecf39b08b";
class Profile extends Component {
  state = {
    username: "",
    email: "",
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    const city = this.state.city;
    const country = "USA";
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country || "USA"}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: 0,
        city: 0,
        country: 0,
        humidity: 0,
        description: 0,
        error: "Please enter the values."
      });
    }
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        city: res.data.city
      }, () => {
        this.getWeather()
      })
    });
  }

  render() {
    return (
      <section>
        <div className="container">
          <br />
          <h3>Latest Weather</h3>
          <hr />
          <div className="col-md-8">
            <section name="weather-widget">
              <div className="row">
                <Weather
                  temperature={this.state.temperature}
                  humidity={this.state.humidity}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </section>
          </div>
          <br />
          {/* 
          <div className="col-md-10">
            <div className="weather" width="100%">
              <img src={weather} className="img-responsive " width="100%" />
             <iframe
                src={weather}
                width="100%"
                height={380}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
              /> 
            </div>
          </div> */}
        </div>

        <div className="container">
          <h3>Outdoor Workouts</h3>
          <hr />
          <div className="col-md-10">
            <img src={outdoor} className="img-responsive " width="100%" />
            <br />
            <p>
              According to one review that included more than 800 subjects,
              exercising outdoors came with a slew of benefits. Participants
              reported feelings of revitalization, decreased anger, and
              increased energy. Another study found that the outdoors have an
              overall positive effect on vitality, or your sense of enthusiasm,
              aliveness, and energy. Finally, simply spending more time outside
              has been shown to prevent increases in obesity among children.
            </p>

            <Link to="/outdoorWorkout" className="container-form-btn">
              <button type="button" className="btn btn-secondary btn-lg">
                Outdoor Page
              </button>
            </Link>
          </div>
        </div>

        <div className="indoor">
          <div className="container">
            <h3>Indoor Workouts</h3>
            <div className="col-md-10">
              <img src={indoor} className="img-responsive" width="100%" />
              <p>text for indoor workout</p>
              <Link to="/indoorWorkout" className="container-form-btn">
                <button type="button" className="btn btn-secondary btn-lg">
                  Indoor Page
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
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
        </div>

        <br />
        <div className="container Profile">
          {/* <h1>On the profile page!</h1>
          <p>Username: {this.state.username}</p>
          <p>Email: {this.state.email}</p> */}
          <Link to="/">
            <button className="btn btn-primary"> Go home </button>
          </Link>
        </div>
        <br />
      </section>
    );
  }
}

export default Profile;

