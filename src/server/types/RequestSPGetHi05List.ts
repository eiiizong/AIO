/**
 * SPGetHi05List 接口调用成功返回的list数据格式
 */
export interface Hi05ListListItem {
  aab301: string
  aab301desc: string
  aae011: string
  aae017: string
  aae036: string
  aae100: string
  chi05a: string
  chi05d: string
  chi031: string
  chi032: string
  chi037: string
  chi037desc: string
  chi050: string
  chi051: string
  chi052: string
  chi053: string
  chi054: string
  chi056: string
  chi058: string
  chi059: string
  myrownum: string
  yab003: string
  yab003desc: string
}

/**
 * SPGetHi05List 接口调用成功返回的数据格式
 */
export interface SPGetHi05ListSuccessResult {
  code: '200' | '500'
  hi05ListPageInfo: string
  lists?: {
    hi05List: {
      list: Hi05ListListItem[]
      total: string
    }
  }
}
