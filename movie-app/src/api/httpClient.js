import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:4000',
});

axios.defaults.headers.post['Content-Type'] = 'application/json';

export default client;
