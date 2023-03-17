<template>
  <div class="use-element-plus">
    <div class="demo-title">{{ useGetRouteQueryData('name') }}</div>

    <div class="demo-content">
      <div class="demo-content-row">
        <el-button type="primary">测试按钮</el-button>
      </div>
      <div class="demo-content-row">
        <el-date-picker v-model="date" type="date" placeholder="Pick a day" />
      </div>
    </div>

    <div class="demo-toolbar">
      <el-button @click="onClickSetTheme('dark')">Dark</el-button>
      <el-button type="primary" @click="onClickSetTheme('default')">Default</el-button>
      <div class="demo-color-block">
        <span class="demonstration">选择主题色</span>
        <el-color-picker v-model="theme.color" @change="onChangeThemeColor($event)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Color } from '@/types'

  import { ref, toRefs } from 'vue'
  import { useStoreTheme } from '@/stores/modules'
  import { useGetRouteQueryData } from '@/hooks'

  const date = ref('')

  const storeTheme = useStoreTheme()
  const { theme } = toRefs(storeTheme)

  // 切换主题
  const onClickSetTheme = (type: string) => {
    // console.log(type)
    storeTheme.updateStoreTheme({ name: type as 'default' })
  }

  const onChangeThemeColor = (color: Color) => {
    storeTheme.updateStoreTheme({ color })
  }
</script>

<style lang="scss" scoped>
  .demo-color-block {
    margin-left: 20px;
  }
</style>
