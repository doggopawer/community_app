import axios from "axios";


axios.defaults.baseURL = 'http://localhost:4000';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 3000;

export default axios;