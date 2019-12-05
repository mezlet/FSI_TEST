import axios from "axios";

console.log(process.env.VUE_APP_API_URL);

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  crossdomain: true
});

export default instance;
