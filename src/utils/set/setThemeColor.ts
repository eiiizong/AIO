/**
 * 颜色混合
 * @param c1 颜色1
 * @param c2 颜色2
 * @param ratio 比例
 * @returns
 */
const colorMix = (c1: string, c2: string, ratio: number) => {
  ratio = Math.max(Math.min(Number(ratio), 1), 0)
  const r1 = parseInt(c1.substring(1, 3), 16)
  const g1 = parseInt(c1.substring(3, 5), 16)
  const b1 = parseInt(c1.substring(5, 7), 16)
  const r2 = parseInt(c2.substring(1, 3), 16)
  const g2 = parseInt(c2.substring(3, 5), 16)
  const b2 = parseInt(c2.substring(5, 7), 16)
  const r = Math.round(r1 * (1 - ratio) + r2 * ratio)
  const g = Math.round(g1 * (1 - ratio) + g2 * ratio)
  const b = Math.round(b1 * (1 - ratio) + b2 * ratio)
  const _r = ('0' + (r || 0).toString(16)).slice(-2)
  const _g = ('0' + (g || 0).toString(16)).slice(-2)
  const _b = ('0' + (b || 0).toString(16)).slice(-2)
  return '#' + _r + _g + _b
}

/**
 * 设置html上的style color参数为空则清除
 * @param color hex颜色
 * @param isDark 是否为暗黑主题
 * @param namespace 命名空间
 */
const setThemeColor = (color: string, isDark = false, namespace = 'el') => {
  const el = document.documentElement

  if (el) {
    if (color) {
      el.style.setProperty(`--${namespace}-color-primary`, color)

      // 此行判断是否为白天/暗夜模式，可根据自身业务调整代码
      const mixColor = isDark ? '#000000' : '#ffffff'

      // 此行判断是否为白天/暗夜模式，可根据自身业务调整代码
      for (let i = 1; i < 10; i++) {
        el.style.setProperty(
          `--${namespace}-color-primary-light-${i}`,
          colorMix(color, mixColor, i / 10)
        )
        el.style.setProperty(
          `--${namespace}-color-primary-dark-${i}`,
          colorMix(color, mixColor, i / 10)
        )
      }

      el.style.setProperty(`--${namespace}-color-primary-dark-2`, colorMix(color, mixColor, 0.2))
    } else {
      // 清除已有设置
      el.style.removeProperty(`--${namespace}-color-primary`)
      for (let i = 1; i < 10; i++) {
        el.style.removeProperty(`--${namespace}-color-primary-light-${i}`)
        el.style.removeProperty(`--${namespace}-color-primary-dark-${i}`)
      }
      el.style.removeProperty(`--${namespace}-color-primary-dark-2`)
    }
  } else {
    // eslint-disable-next-line no-console
    console.error('未找到 el', el)
  }
}

export { setThemeColor }
