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
                <div className="box-color">


                    <div className="container">
                        <div className="row text-center py-5">
                        
                            <div>
                                {this.state.workouts
                                    .map(workout => (
                                        <div className="col-md-4 font-family inline-block">
                                            <h2>{workout.name}</h2>
                                            <div className="row text-center">
                                            <ul>
                                                {workout.exercise.map(exer =>
                                                    <li>{exer}</li>)}
                                            </ul>
                                            </div>
                                 </div>

                                    )

                                    )

                                }
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Outdoor;