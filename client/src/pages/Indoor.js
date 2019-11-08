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
        <div className= "box-color">
          <div className="container">
            <div className="row text-center py-5">

              {this.state.workouts
                .filter(workout => (workout.bilateral.length > 0))
                .map(workout => (
                  <div className="col-md-4">
                    <h4>{workout.name}</h4>
                    <h2>Bilateral Workouts</h2>
                    <ul>
                      {workout.bilateral.map(bilat => (
                        <li>{bilat}</li>
                      ))}
                    </ul>
                    <h2>Unilateral Workouts</h2>
                    <ul>
                      {workout.unilateral.map(unilat => (
                        <li>{unilat}</li>
                      ))}
                    </ul>
                  </div>
                ))}

              {this.state.workouts
                .filter(workout => (workout.bilateral.length === 0))
                .map(workout => (
                  <div className="col-md-12">
                    <h4>{workout.name}</h4>
                    <ul>
                      {workout.exercise.map(exer => (
                        <li>{exer}</li>
                      ))}
                    </ul>
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
