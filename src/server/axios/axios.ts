// index.ts
import axios, { AxiosRequestConfig, Method } from 'axios'
import { ElMessage } from 'element-plus'

import { getEnvData } from '@/utils/get'
import { useStoreUserInfo } from '@/stores/modules'
import errorHandle from './errorHandle'

// 定义接口
interface Pending {
  url?: string
  method?: Method | string
  params: any
  data: any
  cancel: any
}

// declare namespace Api {
//   /**
//    * 接口调用错误
//    */
//   interface RequestResponseReslutError {
//     id: string
//     msg: string
//   }

//   /**
//    * 定义所有接口返回的数据类型
//    */
//   export interface RequestResponseReslut<T> {
//     /**
//      * 状态码 200 成功
//      */
//     code?: number
//     /**
//      * 数据
//      */
//     data?: T
//     /**
//      * true 成功
//      */
//     serviceSuccess?: boolean
//     /**
//      * 错误信息
//      */
//     message?: string
//   }
// }

/**
 * 请求地址前缀
 */
const apiRequstUrl = getEnvData('VITE_API_REQUEST_URL')

const pending: Array<Pending> = []

/**
 * 取消重复请求
 */
const CancelToken = axios.CancelToken

/**
 * 移除重复请求
 * @param config
 */
const removePending = (config: AxiosRequestConfig) => {
  // eslint-disable-next-line no-console
  console.log('pending====', pending)

  for (const key in pending) {
    const index: number = +key
    const item: Pending = pending[key]

    // 当前请求在数组中存在时执行函数体
    if (
      item.url === config.url &&
      item.method === config.method &&
      JSON.stringify(item.params) === JSON.stringify(config.params) &&
      JSON.stringify(item.data) === JSON.stringify(config.data)
    ) {
      // 执行取消操作
      item.cancel('操作太频繁，请稍后再试')
      // 从数组中移除记录
      pending.splice(index, 1)
    }
  }
}

/**
 * 实例化请求配置
 */
const instance = axios.create({
  headers: {
    // 传输请求头
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin-Type': '*'
  },
  // 请求时长
  timeout: 1000 * 30,
  // 请求的base地址
  baseURL: apiRequstUrl,
  // 跨域请求时是否需要使用凭证
  withCredentials: false
})

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
  (config) => {
    const storeUserInfo = useStoreUserInfo()
    const { userInfo } = storeUserInfo
    removePending(config)
    config.cancelToken = new CancelToken((callback) => {
      const { url, method, params, data } = config
      pending.push({
        url,
        method,
        params,
        data,
        cancel: callback
      })
    })
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    if (userInfo.token) {
      config.headers.authorization = 'Bearer ' + userInfo.token
    }
    return config
  },
  (error) => {
    ElMessage.error(error.data.error.message)
    return Promise.reject(error.data.error.message)
  }
)

/**
 * 响应拦截器
 */
instance.interceptors.response.use(
  (config) => {
    console.log('instance.interceptors.response', config)

    removePending(config.config)
    // 请求成功
    if (config.status === 200 || config.status === 204) {
      return Promise.resolve(config)
    } else {
      return Promise.reject(config)
    }
  },

  (error) => {
    const { response } = error
    if (response) {
      errorHandle(response.status)

      // 超时重新请求
      const config = error.config
      // 全局的请求次数,请求的间隙
      const [RETRY_COUNT, RETRY_DELAY] = [3, 1000]

      if (config && RETRY_COUNT) {
        // 设置用于跟踪重试计数的变量
        config.__retryCount = config.__retryCount || 0
        // 检查是否已经把重试的总数用完
        if (config.__retryCount >= RETRY_COUNT) {
          return Promise.reject(response || { message: error.message })
        }
        // 增加重试计数
        config.__retryCount++
        // 创造新的Promise来处理指数后退
        const backoff = new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve()
          }, RETRY_DELAY || 1)
        })
        // instance重试请求的Promise
        return backoff.then(() => {
          return instance(config)
        })
      }

      return Promise.reject(response)
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 后续增加断网情况下做的一些操作
    }
  }
)

// 只需要考虑单一职责，这块只封装axios
export default instance