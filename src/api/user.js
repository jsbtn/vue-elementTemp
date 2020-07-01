/** 
 * @resTost ：操作提示 ? Boolean || String
 * @message ：loading提示 ? String
 */
import request from '@/utils/request';

// 商家列表
export function getUserList(params) {
  return request({
    url: '/api/admin/getUserList',
    method: 'GET',
    params
  });
}