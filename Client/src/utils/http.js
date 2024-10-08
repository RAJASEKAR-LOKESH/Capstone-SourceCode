import axios from "axios";

const instance = axios.create({
  baseURL: "https://capstone-djhj.onrender.com/api",
  timeout: 15000,
});

export default instance;