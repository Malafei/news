import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:44797/",
  //baseURL: "/",
  headers: {
    "Content-type": "application/json"
  }
});