import type { StoreTheme } from '@/stores/types'
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
 * store 主题
 */
const useStoreTheme = defineStore(
  'storeTheme',
  () => {
    const theme = ref<StoreTheme>({
      name: 'default',
      color: '#ff0000'
    })

    const getStoreTheme = computed(() => theme.value)

    function updateStoreTheme(data: StoreTheme) {
      theme.value = { ...theme.value, ...data }
    }

    return { theme, getStoreTheme, updateStoreTheme }
  },
  {
    persist: {
      storage: localStorage
    }
  }
)

export { useStoreTheme }
