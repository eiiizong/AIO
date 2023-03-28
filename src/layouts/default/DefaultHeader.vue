<template>
  <div class="default-header" :style="styleHeader">
    <!-- <div class="title">达州市惠民惠农“一卡通”智能服务站</div> -->
  </div>
</template>

<script setup lang="ts">
  import imageBgHeader from './images/bg-header.png'
  import { computed } from 'vue'

  const styleHeader = computed(() => {
    let str = ''
    str += ` background-image: url(${imageBgHeader});`
    return str
  })
</script>

<style lang="scss" scoped>
  .default-header {
    width: 100%;
    height: 116px;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
  }
</style>
