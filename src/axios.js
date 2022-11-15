import axios from "axios";

const instance = axios.create({
  baseUrl: "...", //API URL
});

export default instance;
