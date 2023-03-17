import { useRoute } from 'vue-router'

/**
 * 根据key获取当前路由query对象中的值
 */
const useGetRouteQueryData = (key: string) => {
  const route = useRoute()
  return route.query[key]
}

export { useGetRouteQueryData }
