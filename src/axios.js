import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5001/clone-3ade4/us-central1/api";

export default axios.create();
