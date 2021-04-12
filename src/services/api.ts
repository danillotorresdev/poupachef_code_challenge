import axios from 'axios';

let backendHost;

if (process.env.NODE_ENV === 'development') {
  backendHost = 'https://psad9m6vrj.execute-api.sa-east-1.amazonaws.com/test';
} else {
  // Change to backend production here
  backendHost = 'http://localhost:3000';
}

const api = axios.create({
  baseURL: backendHost,
});

export default api;
