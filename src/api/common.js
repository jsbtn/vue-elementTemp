/** 
 * @resTost ：操作提示 ? Boolean || String
 * @message ：loading提示 ? String
 */
import request from '@/utils/request';

// 账号登录
export function loginAdmin(data) {
  return request({
    url: '/api/loginAdmin',
    method: 'post',
    // message: "登录中",
    data
  });
}

// app账号登录
export function Login(data) {
  return request({
    url: '/api/login',
    method: 'post',
    // message: "登录中",
    data
  });
}


// 退出
export function logOut(params) {
  return request({
    url: '/api/logOut',
    method: 'GET',
    message: "退出登录",
    params
  });
}

