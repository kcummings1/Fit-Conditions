import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (password, username, email, city, state, zipcode) => {
    return axios.post('api/signup', { username: username, email: email, password: password, city: city, state: state, zipcode: zipcode });
  },
  // create a route to get indoor workouts
  getIndoorworkout: () => {
    return axios.get(`api/indoorworkouts`);
  },
  // create a route to get outdoor workouts
  getOutdoorWorkout: (Type) => {
    return axios.get(`api/outdoorWorkouts, ${Type.OutdoorWorkout}`);
  }

};
