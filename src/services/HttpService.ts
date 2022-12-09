import axios from "axios";
import AppConstants from "../constants/AppConstants";
import RouteConstants from "../constants/RouteConstants";

const http = axios.create({
  baseURL: AppConstants.API_BASE_URL,
  headers: {
    // "Content-type": "application/json"
    "Content-Type": "multipart/form-data"
  }
});

http.interceptors.response.use(
  function (response) {
    console.log({ response });

    return response.data;
  },
  function (error) {
    console.log({ error });
    if (!error.response) {
      console.log({ error });
    }

    if (error?.response?.data?.error === "Unauthorized") {
      window.location.replace(RouteConstants.HOME);
    }

    return Promise.reject(error.response.data);
  }
);

export default http;
