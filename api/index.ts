import Axios from 'axios';
import Cookies from 'js-cookie';

const axios = Axios.create();

axios.interceptors.request.use(
   (config) => {
      const auth_token = Cookies.get('token');

      config.headers['Authorization'] = 'Bearer ' + auth_token;

      config.withCredentials = true;

      return config;
   },
   (error) => Promise.reject(error)
);

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

export default axios;
