type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`

/**
 * 颜色类型定义
 */
export type Color = RGB | RGBA | HEX
