import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mw.Nhl1mqkm9BJL4ORCEbtn1T9qcYV-3xFcS5OStzEvLjE3J5hb4EujK8AtWdfo',
  },
});
