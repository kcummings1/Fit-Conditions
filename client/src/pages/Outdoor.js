import React, { Component } from 'react';
import API from "../utils/API"
import "./Outdoor.css"


class Outdoor extends Component {
    state = {
        workouts: []
    }


    componentDidMount() {
        API.getOutdoorWorkout()
            .then(res => {
                console.log(res.data);
                this.setState({ workouts: res.data }, () => {
                    // console.log(res.data);
                })
            })
    }

    render() {
        if (this.state.workouts.length === 0) {
            return <div>Loading...</div>
        }
        return (
            <section className="outdoor-content">
                <div className="container">
                    <div className="row text-center">
                    </div>
                    <div>
                        {this.state.workouts
                            .map(workouts => (
                                <div className="col-md-12">
                                    <h2>{workouts.name}</h2>
                      <ul>
                                        {workouts.exercise.map(exer =>
                                            <li>{exer}</li>)}
                                    </ul>

                                </div>
                            )

                            )

                        }

                    </div>
                </div>
            </section>
        )
    }

}

export default Outdoor;