import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (city, state, zipcode) => {
    return axios.post('api/signup', {city: city, state: state, zipcode: zipcode});
  }
};
