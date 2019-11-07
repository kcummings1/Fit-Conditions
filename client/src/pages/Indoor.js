import React, { Component } from "react";
import API from "../utils/API";
import "./Indoor.css";

class Indoor extends Component {
  state = {
    workouts: []
  };

  componentDidMount() {
    API.getIndoorworkout().then(res => {
      console.log(res.data);
      this.setState({ workouts: res.data }, () => {
        // console.log(res.data);
      });
    });
  }

  render() {
    if (this.state.workouts.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <section className="indoor-content">
        <div>
          <div className="container">
            <div className="row text-center py-5">
              

              {this.state.workouts
                .filter(workout => workout.bilateral)
                .map(workout => (
                  <div className="col-md-4">
                    <h2>{workout.name}</h2>
                    <h4>Bilateral Workouts</h4>
                    <ul>
                      {workout.bilateral.map(bilat => (
                        <li>{bilat}</li>
                      ))}
                    </ul>
                    <h4>Unilateral Workouts</h4>
                    <ul>
                      {workout.unilateral.map(unilat => (
                        <li>{unilat}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {this.state.workouts
                .filter(workout => !workout.bilateral)
                .map(workout => (
                  <div className="col-md-12">
                    <h2>{workout.name}</h2>
                    <ul>{workout.exercise.map(exer => (
                        <li>{exer}</li>
                    ))}</ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Indoor;
