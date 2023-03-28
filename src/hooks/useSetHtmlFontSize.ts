import { toRefs } from 'vue'
import { useStoreHtmlFontSize } from '@/stores/modules'

/**
 * 设置 html 标签 字体大小
 */
const useSetHtmlFontSize = () => {
  const storeHtmlFontSize = useStoreHtmlFontSize()
  const { htmlFontSize } = toRefs(storeHtmlFontSize)

  ;(function (doc, win) {
    const base = 1920
    const docEl = doc.documentElement
    const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    const recalc = function () {
      const { clientWidth } = docEl
      if (!clientWidth) return
      docEl.style.fontSize = htmlFontSize.value * (clientWidth / base) + 'px'
    }
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
  })(document, window)
}

export { useSetHtmlFontSize }
