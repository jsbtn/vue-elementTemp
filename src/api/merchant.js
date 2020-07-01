/** 
 * @resTost ：操作提示 ? Boolean || String
 * @message ：loading提示 ? String
 */
import request from '@/utils/request';

// 商家列表
export function getMerchantListInfo(params) {
  return request({
    url: '/api/admin/getMerchantListInfo',
    method: 'GET',
    params
  });
}

// 商家-新增
export function addMerchantInfo(data) {
  return request({
    url: '/api/admin/addMerchantInfo',
    method: 'POST',
    data
  });
}

// 商家-编辑
export function upDateMerchantInfo(data) {
  return request({
    url: '/api/admin/upDateMerchantInfo/'+data.id,
    method: 'PUT',
    data
  });
}

// 商家-删除
export function delMerchantInfo(data) {
  return request({
    url: '/api/admin/delMerchantInfo/'+data.id,
    method: 'DELETE',
    resTost:"删除成功",
    message:"loading",
  });
}

// 商家-获取详情
export function getMerchantInfo(data) {
  return request({
    url: '/api/admin/getMerchantInfo/'+data.id,
    method: 'GET',
    message:"加载中..."
  });
}
