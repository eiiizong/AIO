<template>
  <div class="use-element-plus">
    <div class="demo-title">主题切换</div>

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
        <el-color-picker v-model="color" @change="onClickSetTheme($event)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Ref } from 'vue'
  import { ref } from 'vue'
  import { useStoreThemeName } from '@/stores/modules'

  const color: Ref<string | undefined> = ref('')
  const date = ref('')
  const storeTheme = useStoreThemeName()

  color.value = storeTheme.getStoreTheme.color

  // 切换主题
  const onClickSetTheme = (type) => {}
</script>

<style lang="scss" scoped>
  .demo-color-block {
    margin-left: 20px;
  }
</style>
