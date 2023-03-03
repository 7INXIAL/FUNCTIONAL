import axios, { Axios, AxiosResponse } from "axios";
import { message } from "antd";
const request: Axios = axios.create({
  timeout: 6000,
});

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("uniquely");
    if (!token) {
      message.error("尚未定义标识");
      throw new Error("请设置 uniquely 字段!");
    }
    config.headers.token = localStorage.getItem("token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse & { code?: number }) => {
    if (response.code === 400) {
      message.error("即将登出!");
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default request;
