import type { StoreThemeName } from '@/stores/types'
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
const useStoreThemeName = defineStore(
  'storeThemeName',
  () => {
    const themeName = ref<StoreThemeName>({
      themeName: 'default',
      themeColor: '#ff0000'
    })

    const getStoreThemeName = computed(() => themeName.value)

    function updateStoreTheme(data: StoreThemeName) {
      themeName.value = { ...getStoreThemeName.value, ...data }
    }

    return { themeName, getStoreThemeName, updateStoreTheme }
  },
  {
    persist: {
      storage: localStorage
    }
  }
)

export { useStoreThemeName }
