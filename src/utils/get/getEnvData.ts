import { getIsDev } from '@/utils/get'
/**
 * 获取当前环境配置的值
 * @param key 键
 * @returns
 */
const getEnvData = (key: string) => {
  let str = ''
  const value = process.env[key]

  if (value) {
    str = value
  }

  if (getIsDev()) {
    // eslint-disable-next-line no-console
    console.log(`通过geEnvData方法， 传入的key=> ${key} ，获取到value=> ${value}`)
  }

  return str
}

export { getEnvData }
