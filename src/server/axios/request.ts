import type { LoadingOptions } from 'element-plus'

import axios from './axios'
import { AES_Encrypt } from './aes'
import { getEnvData } from '@/utils/get'

/**
 * 网络请求
 * @param url 用于请求的服务器 URL
 * @param params 与请求一起发送的 URL 参数，必须是一个简单对象或 URLSearchParams 对象｜作为请求体被发送的数据
 * @param headers 自定义请求头
 * @param method 创建请求时使用的方法
 * @param loadingConfig 加载中配置
 * @param isShowLoading 是否显示错误信息
 * @param isShowErrorMsg 接口调用错误时，是否显示错误信息。
 * @returns
 */
const request = (
  url: string,
  params: any = null,
  headers: any = null,
  timeout = 3000,
  method = 'POST',
  loadingConfig: LoadingOptions | null = null,
  isShowLoading = true,
  isShowErrorMsg = true
): Promise<any> => {
  /**
   * 是否开启加密
   */
  const openEncryption = getEnvData('VITE_OPEN_DATA_ENCRYPTION')
  method = method.trim().toUpperCase()

  // params 统一添加默认参数
  params = {
    ...(params || {}),
    chb004: '02' // 调用渠道
  }

  // 处理加密的参数
  if (openEncryption === 'true') {
    params = JSON.stringify(params)
    params = AES_Encrypt(params)
    params = encodeURIComponent(params)
  }

  return new Promise((resolve, reject) => {
    let promise
    if (method === 'POST') {
      promise = axios({
        url,
        timeout,
        headers,
        method,
        data: params,
        isShowLoading,
        loadingConfig,
        isShowErrorMsg
      })
    } else if (method === 'GET') {
      promise = axios({
        url,
        timeout,
        headers,
        method,
        params,
        isShowLoading,
        loadingConfig,
        isShowErrorMsg
      })
    } else {
      reject('method参数仅支持GET和POST，请传入正确的参数！！！')
      return
    }

    promise
      .then((res) => {
        console.log(res, 987)

        const { data, status } = res
        if (status === 200) {
          console.log(data, 1231243248888824)
          resolve(data)
        } else {
          reject(res)
        }
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}

export { request }
