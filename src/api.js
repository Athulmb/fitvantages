// api.js (your axios instance file)
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:7000/api', // ✅ change to production URL later
});

export default API;
