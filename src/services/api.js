import axios from 'axios';

const api = axios.create({
  baseURL: 'http://187.34.149.190:3333',
});

export default api;
