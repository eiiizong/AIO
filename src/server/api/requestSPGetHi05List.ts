import type { SPGetHi05ListSuccessResult } from '@/server/types'
import { request } from '@/server/axios'

const requestSPGetHi05List = (
  pageNo: number,
  pageSize: number,
  isShowLoading = true,
  isShowErrorMsg = true
): Promise<SPGetHi05ListSuccessResult> => {
  const data = {
    methodNamedesc: '获取审批系统政策文件列表',
    methodName: 'getHi05List',
    pageNo: pageNo + '',
    pageSize: pageSize + '',
    aab301: ''
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontBcpDataRestService/getWebServiceDataTwo',
      data,
      null,
      60000,
      'POST',
      null,
      isShowLoading,
      isShowErrorMsg
    )
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestSPGetHi05List }
