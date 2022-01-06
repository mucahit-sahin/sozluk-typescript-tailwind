import axios from "axios";

const api = axios.create({
  baseURL: "https://apisozluk.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;