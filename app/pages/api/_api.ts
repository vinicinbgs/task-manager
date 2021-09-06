import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.API_URL}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default api;