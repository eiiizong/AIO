<template>
  <el-config-provider
    :locale="configProviderData.locale"
    :zIndex="configProviderData.zIndex"
    :button="configProviderData.button"
    :message="configProviderData.message"
    :experimental-features="configProviderData.experimentalFeatures"
    :namespace="configProviderData.namespace"
    :size="configProviderData.size">
    <LayoutDefult />
  </el-config-provider>
</template>

<script setup lang="ts">
  import LayoutDefult from '@/layouts/default/index.vue'
  import { watchEffect, reactive, toRefs, watch, onMounted } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useStoreLanguage } from '@/stores/modules'
  import { useSetTheme, useSetHtmlFontSize } from '@/hooks'
  import { getEnvData } from '@/utils/get'

  const { messages, locale } = useI18n()
  const storeLanguage = useStoreLanguage()
  const { language } = toRefs(storeLanguage)

  const configProviderData = reactive({
    // 翻译文本对象
    locale: messages.value[language.value],
    // 全局组件大小  large / default /small
    size: 'default',
    // 全局初始化 zIndex 的值
    zIndex: 2000,
    // 全局组件类名称前缀 (需要配合 $namespace 使用)
    namespace: getEnvData('VITE_ELEMENTPLUS_NAMESPACE'),
    // 按钮相关的配置
    button: {
      // 自动在两个中文字符之间插入空格
      autoInsertSpace: false
    },
    // 消息相关配置
    message: {
      // 可同时显示的消息最大数量
      max: 3
    },
    // 添加的实验阶段的功能，所有功能都是默认设置为 false
    experimentalFeatures: {}
  })

  onMounted(() => {
    useSetHtmlFontSize()
  })

  // 监听主题或者主题色改变
  watchEffect(useSetTheme)
  // 监听语言改变
  watch(
    () => storeLanguage.language,
    (val) => {
      configProviderData.locale = messages.value[val]
      locale.value = val
    },
    { immediate: true }
  )
</script>

<style lang="scss">
  // 字体文件引入
  @import '@/assets/iconfont/index.scss';
  @import '@/assets/styles/index.scss';
  @import '@/assets/fonts/AlibabaPuHuiTi/AlibabaPuHuiTi.scss';
</style>
