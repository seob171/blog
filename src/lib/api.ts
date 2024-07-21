import axios from "axios";

import { createClient } from "@/utils/supabase/client";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVICE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const supabase = createClient();
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `${session.token_type} ${session.access_token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    // 이 부분에서 access token, refresh token 갱신 가능
    return Promise.reject(error);
  },
);

export default axiosInstance;
