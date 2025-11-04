import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // will call relative endpoints like /authors, /books, etc.
});

export default api;
