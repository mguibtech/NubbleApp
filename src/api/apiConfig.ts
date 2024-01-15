import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MzQ.HR4ano5KXZKFLaCKWoTWXx9Fzf4zU68koC_dr0h26VzoS6b2iBx_kx6Suh_Z',
  },
});
