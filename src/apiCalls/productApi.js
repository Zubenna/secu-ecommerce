import axios from 'axios';
const BASE_URL = 'http://localhost:6050/';
// const BASE_URL = 'https://homandoff-api.herokuapp.com/';

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root').user));

// .currentUser.token;

// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   // headers: { token: `Bearer ${TOKEN}` },
// });

axios.defaults.baseURL = BASE_URL;
let refresh = false;
axios.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      //!rfresh
      refresh = true;
      console.log('current error', error.response.status);
      const response = await axios.post(
        'auth/refresh',
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        let y = response.status;
        console.log('successful refresh error 201 or 200', y);
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.token}`;
        console.log('Refresh token interceptors completed successfully');

        return axios(error.config);
      }
    }
    if (error.response.status === 403) {
      console.log('For expired cookies 403', error.response.status);
      alert('Page has expired, please login again');
      window.location.replace('/login');
      // await axios.post('auth/logout', {}, { withCredentials: true });
    }

    refresh = false;
    return error;
  }
);
