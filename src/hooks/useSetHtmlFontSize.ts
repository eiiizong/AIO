/**
 * 设置 html 标签 字体大小
 */
const useSetHtmlFontSize = () => {
  ;(function (doc, win) {
    const base = 1920
    const docEl = doc.documentElement
    const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    const recalc = function () {
      const { clientWidth } = docEl
      if (!clientWidth) return
      docEl.style.fontSize = 16 * (clientWidth / base) + 'px'
    }
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
  })(document, window)
}

export { useSetHtmlFontSize }
