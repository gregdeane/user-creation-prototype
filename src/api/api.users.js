import axios from 'axios';
import { url } from './environment';

class UserApi {
  users = [];

  static getUsers() {
    return axios.get(`${url}/users`)
      .then(response => {
        this.users = Object.assign([], response.data);
        return this.users;
      })
      .catch(this.throwError);
  }

  static createUser(user) {
    return axios.post(`${url}/users`, user)
      .then(response => {
        this.users = Object.assign([], this.users);
        this.users.push(response.data);
        return this.users;
      })
      .catch(this.throwError);
  }

  static updateUser(user) {
    return axios.put(`${url}/users/${user.id}`, user)
      .then(response => {
        const index = this.users.findIndex(u => u.id === user.id);
        this.users = Object.assign([], this.users);
        this.users.splice(index, 1, response.data);
        return this.users;
      })
      .catch(this.throwError);
  }

  static deleteUser(user) {
    return axios.delete(`${url}/users/${user.id}`)
      .then(response => response.data)
      .catch(this.throwError);
  }

  static throwError(error) {
    throw error;
  }

}

export default UserApi;
