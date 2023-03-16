import type { Color } from '@/types'

/**
 * Store themeName 主题颜色名称 类型定义
 */
export interface StoreTheme {
  /**
   * 主题名称
   */
  name?: 'default' | 'dark'
  /**
   * 主题颜色
   */
  color?: Color
}
