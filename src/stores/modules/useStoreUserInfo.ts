import type { StoreUserInfo } from '@/stores/types'
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * 命名规则：
 * 数据字段如: test
 * 方法名则为： useStoreTest
 * getter方法名则为： getStoreTest
 * actions方法名则为： updateStoreTest
 */
//
/**
 * store 用户信息
 */
const useStoreUserInfo = defineStore(
  'storeUserInfo',
  () => {
    const userInfo = ref<StoreUserInfo>({ token: 'ceshi' })

    const getStoreUserInfo = computed(() => userInfo.value)

    function updateStoreUserInfo(data: StoreUserInfo) {
      userInfo.value = {
        ...userInfo.value,
        ...data
      }
    }

    return { userInfo, getStoreUserInfo, updateStoreUserInfo }
  },
  {
    persist: {
      storage: sessionStorage
    }
  }
)

export { useStoreUserInfo }
