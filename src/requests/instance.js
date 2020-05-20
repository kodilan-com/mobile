import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.kodilan.com/',
});

export default instance;
