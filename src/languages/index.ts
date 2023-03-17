import { createI18n } from 'vue-i18n'
import { getEnvData } from '@/utils/get'

import messages from './locales'

const systemLanguage = getEnvData('VITE_SYSTEM_LANGUAGE')

const i18n = createI18n({
  legacy: false,
  locale: systemLanguage || 'zh-cn',
  missingWarn: false,
  fallbackWarn: false,
  messages
})

export default i18n
