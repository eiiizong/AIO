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
 * store html 基础字体大小 默认16
 */
const useStoreHtmlFontSize = defineStore(
  'storeHtmlFontSize',
  () => {
    const htmlFontSize = ref(16)

    const getStoreHtmlFontSize = computed(() => htmlFontSize.value)

    function updateStoreHtmlFontSize(data: number) {
      htmlFontSize.value = data
    }

    return { htmlFontSize, getStoreHtmlFontSize, updateStoreHtmlFontSize }
  },
  {
    persist: {
      storage: localStorage
    }
  }
)

export { useStoreHtmlFontSize }
