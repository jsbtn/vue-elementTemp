import axios from "axios";
import router from "@/router"
import { getToken,setToken } from '@/utils/cookie';
import { requestData } from '@/utils/common'
import { Message, Loading } from 'element-ui';
import store from '@/store'

const service = axios.create({
  timeout: 15000
});
let resTost = '';
service.interceptors.request.use(
  config => {
    if (config.message) {
      let loadingInstance = Loading.service({
        background: 'rbga(0,0,0,.2)',
        text: config.message || '请求中',
      });
    }
    if (config.resTost) {
      resTost = config.resTost;
    }
    config.headers = {
      "Content-Type": config.contentType || "application/x-www-form-urlencoded",
      "Cookie": "edu_session=" + getToken()
    };
    config.data = config.contentType ? config.data : requestData(config.data)
    config.params = config.contentType ? config.params : requestData(config.params)
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    loadingInstance.close();
    if (response.status == 200) {
      const res = response.data;
      if (res.code === 200) {
        if (resTost) {
          let msg = typeof resTost == 'boolean' ? res.msg : resTost;
          Message({
            type: "success",
            message: msg
          });
          resTost = '';
        }
        return Promise.resolve(res);
      } else if (res.code == 401) {
        Message({
          type: "warning",
          message: res.msg,
        });
        // 清除本地token 跳转首页
        store.dispatch('setToken', '');
        setToken("");
        router.push({
          path: "/"
        });
        return Promise.resolve(res);
      } else {
        return Promise.reject(response);
      }
      resTost = '';
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;