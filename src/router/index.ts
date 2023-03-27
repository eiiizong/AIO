import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

import { useStoreUserInfo } from '@/stores/modules'
import routes from './routes'

//全局进度条的配置
NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 1000, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 路由拦截
router.beforeEach((to, from, next) => {
  NProgress.start()
  const storeUserInfo = useStoreUserInfo()
  const { token } = storeUserInfo.getStoreUserInfo
  const { meta, fullPath } = to
  const { title, requireAuth } = meta

  if (title) {
    document.title = title as string
  }

  // eslint-disable-next-line no-console
  console.log('router.beforeEach from', from)

  // 判断该路由是否需要登录权限 requireAuth 可以在路由元信息指定哪些页面需要登录权限
  if (requireAuth) {
    // 是否已登录
    if (!token) {
      // 没有用户id就重定向登陆
      next({
        path: '/login',
        query: { redirect: fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
      return
    } else {
      next()
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})
export default router
