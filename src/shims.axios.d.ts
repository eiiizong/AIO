// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { AxiosRequestConfig } from 'axios'
import type { LoadingOptions } from 'element-plus'

declare module 'axios' {
  export interface AxiosRequestConfig {
    /**
     * 是否显示加载中动画
     */
    isShowLoading?: boolean
    /**
     * 加载中动画配置
     */
    loadingConfig?: LoadingOptions | null
    /**
     * 是否显示请求错误信息
     */
    isShowErrorMsg?: boolean
  }
}
