/**
 * http配置
 */
import axios from "axios";
import { Modal } from 'antd'
const Axios = axios.create({
  timeout: 10000,
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
});

Axios.CancelToken = axios.CancelToken;
//POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    if (config.method === "post") { }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  res => {
    //对响应数据做些事
    return res;
  },
  error => {
    if (error.response) {
      if (error.response.status === 401) {
        //返回 401 清除token信息并跳转到登录页面
        Modal.info({
          title: '用户已过期，请重新登录！',
          onOk() {
            // window.location.href = '/login'
          },
        });
      }
    }
    return Promise.reject(error);
  }
);

export default Axios