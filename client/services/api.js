// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getAllClasses = () => API.get('/classes');
export const createClass = (data) => API.post('/classes', data);
