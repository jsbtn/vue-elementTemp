/** 
 * @resTost ：操作提示 ? Boolean || String
 * @message ：loading提示 ? String
 */
import request from '@/utils/request';

// 商家类型列表
export function getTypeList(params) {
  return request({
    url: '/api/admin/getTypeList',
    method: 'GET',
    params
  });
}

// 商家类型-新增
export function addTypeInfo(data) {
  return request({
    url: '/api/admin/addTypeInfo',
    method: 'POST',
    data
  });
}

// 商家类型-编辑
export function upDateTypeInfo(data) {
  return request({
    url: '/api/admin/upDateTypeInfo/'+data.id,
    method: 'PUT',
    data
  });
}

// 商家-删除
export function delTypeInfo(data) {
  return request({
    url: '/api/admin/delTypeInfo/'+data.id,
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
  });
}
