import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://express-todo-list-app.herokuapp.com/api/v1',
});

export default instance;
