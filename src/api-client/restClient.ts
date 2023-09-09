import axios from "axios";

const restClient = axios.create({
  baseURL: "api/",
  headers: {
    "Content-Type": "application/json",
  },
});

restClient.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default restClient;
