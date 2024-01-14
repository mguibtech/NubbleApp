import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.2e-BtCl8yGMUHOGAjoDPy7HR2g-no9UWNdLUjmZWi896ngPrzEDwKBz2YzZa',
  },
});
