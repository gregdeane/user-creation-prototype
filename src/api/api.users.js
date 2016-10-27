import axios from 'axios';
import { url } from './environment';

class UserApi {

  static getUsers() {
    return axios.get(`${url}/users`)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }

  static createUser(user) {
    return axios.post(`${url}/users`, user)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }

  static updateUser(user) {
    return axios.put(`${url}/users/${user.id}`, user)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }

  static deleteUser(user) {
    return axios.delete(`${url}/users/${user.id}`)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }

}

export default UserApi;
