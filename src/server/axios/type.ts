import { Method } from 'axios'

/**
 * 定义接口类型
 */
export interface Pending {
  url?: string
  method?: Method | string
  params: any
  data: any
  cancel: any
}
