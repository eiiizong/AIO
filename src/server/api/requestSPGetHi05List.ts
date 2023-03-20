// import type { W017SuccessResult } from '@/server/types'
import { request } from '@/server/axios'

const requestSPGetHi05List = (pageNo: number, pageSize: number, isShowLoading = true) => {
  const data = {
    methodNamedesc: '获取审批系统政策文件列表',
    methodName: 'getHi05List',
    pageNo: pageNo + '',
    pageSize: pageSize + '',
    aab301: ''
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontBcpDataRestService/getWebServiceDataTwo', data, isShowLoading)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestSPGetHi05List }
