import type { Color } from '@/types'

/**
 * Store themeName 主题颜色名称 类型定义
 */
export interface StoreThemeName {
  /**
   * 主题名称
   */
  themeName: 'default' | 'dark'
  /**
   * 主题颜色
   */
  themeColor: Color
}
