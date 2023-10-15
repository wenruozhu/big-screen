import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { message } from "ant-design-vue";

// import { Message, Modal } from '@arco-design/web-vue';
// import { useUserStore } from '@/store';
import { getToken } from "@/utils/auth";

export interface HttpResponse<T = unknown> {
  status: number;
  msg: string;
  code: number;
  data: T;
}

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // let each request carry token
    // this example using the JWT token
    // Authorization is a custom headers key
    // please modify it according to the actual situation
    const token = getToken();
    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // do something
    return Promise.reject(error);
  }
);
// add response interceptors
axios.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    return response.data;
  },
  (error) => {
    // Message.error({
    //   content: error.msg || 'Request Error',
    //   duration: 5 * 1000,
    // });
    return Promise.reject(error);
  }
);
