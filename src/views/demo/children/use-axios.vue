<template>
  <div class="use-element-plus">
    <div class="demo-title">请求示例</div>
    <div class="demo-content">
      <div class="demo-content-row">
        接口返回内容：<br />{{ JSON.stringify(customData.hi05List) }}
      </div>
    </div>
    <div class="demo-toolbar">
      <el-button type="primary" @click="onClick">调用接口</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import { requestSPGetHi05List } from '@/server/api'

  const customData = reactive({
    hi05List: []
  })

  const onClick = () => {
    requestSPGetHi05List(1, 10).then((res) => {
      console.log(res, 'requestSPGetHi05List')
    })
  }
</script>

<style lang="scss" scoped>
  .use-element-plus {
    width: 100%;
  }
</style>
