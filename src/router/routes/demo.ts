/**
 * /demo 示例
 */
const routeDemo = {
  path: '/demo',
  component: () => import('@/views/demo/index.vue'),
  meta: {
    title: '示例',
    requireAuth: false,
    isKeepAlive: false
  },
  children: [
    {
      path: 'use-axios',
      component: () => import('@/views/demo/children/use-axios.vue'),
      meta: {
        title: '示例 use-axios',
        requireAuth: false,
        isKeepAlive: true
      }
    },
    {
      path: 'use-echart-pie',
      component: () => import('@/views/demo/children/use-echart-pie.vue'),
      meta: {
        title: '示例 echart-pie',
        requireAuth: false,
        isKeepAlive: true
      }
    },
    {
      path: 'use-element-plus',
      component: () => import('@/views/demo/children/use-element-plus.vue'),
      meta: {
        title: '示例 use-element-plus',
        requireAuth: false,
        isKeepAlive: true
      }
    },
    {
      path: 'use-language',
      component: () => import('@/views/demo/children/use-language.vue'),
      meta: {
        title: '示例 use-language',
        requireAuth: false,
        isKeepAlive: true
      }
    },
    {
      path: 'use-pinia',
      component: () => import('@/views/demo/children/use-pinia.vue'),
      meta: {
        title: '示例 use-pinia',
        requireAuth: false,
        isKeepAlive: true
      }
    },
    {
      path: '',
      component: () => import('@/views/demo/children/use-theme.vue'),
      meta: {
        title: '示例 use-theme',
        requireAuth: false,
        isKeepAlive: true
      }
    },
    {
      path: 'use-theme',
      component: () => import('@/views/demo/children/use-theme.vue'),
      meta: {
        title: '示例 use-theme',
        requireAuth: false,
        isKeepAlive: true
      }
    }
  ]
}
export default routeDemo
