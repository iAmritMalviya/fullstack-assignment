import axios from "axios";

const url =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : import.meta.env.VITE_BACKEND_URL;

const AxiosBase = axios.create({
  baseURL: url,
  withCredentials: true,
});

export default AxiosBase;
