<template>
  <div class="default-footer" :style="styleFooter">
    <!-- <div class="title">达州市惠民惠农“一卡通”智能服务站</div> -->
  </div>
</template>

<script setup lang="ts">
  import imageBgFooter from './images/bg-footer.png'

  import { computed } from 'vue'

  const styleFooter = computed(() => {
    let str = ''
    str += ` background-image: url(${imageBgFooter});`
    return str
  })
</script>

<style lang="scss" scoped>
  .default-footer {
    width: 100%;
    height: 89px;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
  }
</style>
