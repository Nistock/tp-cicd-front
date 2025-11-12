import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backendtp-master.onrender.com/', // will call relative endpoints like /authors, /books, etc.
});

export default api;
