import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVICE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const accessToken = store.getState().accessTokenValue.accessTokenValue;
    // console.log(accessToken);
    // if (accessToken) {
    //   config.headers["Authorization"] = accessToken;
    // }
    console.log("axios config : ", config);
    return config;
  },

  (error) => {
    console.log("axios config : ", error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("axios config : ", response);
    return response;
  },

  (error) => {
    // 이 부분에서 access token, refresh token 갱신 가능
    console.log("axios config : ", error);
    return Promise.reject(error);
  },
);

export default axiosInstance;
