import type { StoreLanguage } from '@/stores/types'
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
 * store 语言
 */
const useStoreLanguage = defineStore(
  'storeLanguage',
  () => {
    const language = ref<StoreLanguage>('zh-cn')

    const getStoreLanguage = computed(() => language.value)

    function updateStoreLanguage(data: StoreLanguage) {
      language.value = data
    }

    return { language, getStoreLanguage, updateStoreLanguage }
  },
  {
    persist: {
      storage: localStorage
    }
  }
)

export { useStoreLanguage }
