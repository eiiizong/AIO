// request.ts
import axios from './axios'
import qs from 'qs'

/**
 * 请求数据
 * @param url 请求地址
 * @param data 请求参数
 * @param header 请求参数
 * @param method 请求方式
 * @param loadingConfig 加载中配置
 * @param isShowLoading 是否显示错误信息
 * @param isShowErrorMsg 接口调用错误时，是否显示错误信息。
 * @returns
 */
const request = (
  url: string,
  data: any = null,
  headers: any = null,
  method = 'POST'
  // loadingConfig = null,
  // isShowLoading = true,
  // isShowErrorMsg = true
): Promise<any> => {
  if (method.toUpperCase() === 'GET') {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params: data, headers })
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  } else if (method.toUpperCase() === 'POST') {
    return new Promise((resolve, reject) => {
      axios
        .post(url, qs.stringify(data), { headers })
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  } else {
    return Promise.reject('method参数仅支持GET和POST，请传入正确的参数！！！')
  }
}

export { request }
