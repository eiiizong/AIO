import type { LoadingOptions } from 'element-plus'

import axios from './axios'
import { AES_Encrypt } from './aes'
import { getEnvData } from '@/utils/get'

/**
 * 接口调用成功或者失败返回的数据格式
 */
interface RequestResponseReslut<T> {
  /**
   * 状态码 200 成功
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    resultData: T
  }
  /**
   * 框架错误信息
   */
  errors?: any[]
  /**
   * 服务器调用结果 true 成功
   */
  serviceSuccess?: boolean
  /**
   * 请求id
   */
  requestId?: string
}

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
        const { data } = res

        let resData: RequestResponseReslut<any> = {}

        resData = { ...(data as RequestResponseReslut<any>) }

        const { code, data: apiData } = resData
        if (code == 200 && apiData) {
          resolve(apiData.resultData)
        } else {
          reject(resData)
        }
      })
      .catch((err: any) => {
        reject(err)
      })
      .finally(() => {
        console.log(1234)
      })
  })
}

export { request }
