import axios from './axios'
import { AES_Encrypt } from './aes'
import { getEnvData } from '@/utils/get'
// import qs from 'qs'

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
  params: any = null,
  // headers: any = null,
  method = 'POST'
  // loadingConfig = null,
  // isShowLoading = true,
  // isShowErrorMsg = true
): Promise<any> => {
  const openEncryption = getEnvData('VITE_OPEN_DATA_ENCRYPTION')
  method = method.trim().toUpperCase()
  params = {
    ...params,
    chb004: '02' // 调用渠道
  }

  if (openEncryption === 'true') {
    params = JSON.stringify(params)
    params = AES_Encrypt(params)
    params = encodeURIComponent(params)
  }

  return new Promise((resolve, reject) => {
    let promise: any = null

    if (method === 'GET') {
      promise = axios.get(url, {
        params
      })
    } else if (method === 'POST') {
      promise = axios.post(url, params)
    } else {
      reject('method参数仅支持GET和POST，请传入正确的参数！！！')
    }

    promise
      .then((res: any) => {
        console.log(res)
        resolve(res)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}

export { request }
