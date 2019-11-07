import React, { Component } from 'react';
import API from "../utils/API"


class Indoor extends Component {
    state = {
        workouts: []
    }


    componentDidMount() {
        API.getIndoorworkout()
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
            <div>
                {this.state.workouts.map(workouts => {
                    
                })  

                }
            </div>
        )
    }

}

export default Indoor;