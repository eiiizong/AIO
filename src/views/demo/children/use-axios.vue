<template>
  <div class="use-element-plus">
    <div class="demo-title">请求示例</div>
    <div class="demo-content">
      <div class="demo-content-row">接口返回内容：<br />{{ responeData }}</div>
    </div>
    <div class="demo-toolbar">
      <el-button type="primary" @click="onClick">调用接口</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  import { requestSPGetHi05List } from '@/server/api'

  const responeData = ref('')

  const onClick = () => {
    requestSPGetHi05List(1, 10).then((res) => {
      responeData.value = JSON.stringify(res)
    })
  }
</script>

<style lang="scss" scoped>
  .use-element-plus {
    width: 100%;
  }
</style>
