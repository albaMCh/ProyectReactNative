import axios from "axios";

export default axios.create({
  baseURL: "https://jobrun-production.onrender.com", // Base URL will be completed with the endopoints of our backend app
  responseType: "json",
  timeout: 6000,
});
