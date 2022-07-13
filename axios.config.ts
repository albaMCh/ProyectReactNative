import axios from "axios";

// TODO Rellenar el campo baseUrl con el /api incluido

export default axios.create({
  baseURL: "https://jobrun-production.onrender.com",
  headers: {
    "Content-type": "application/json",
  },
});
