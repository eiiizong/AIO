<template>
  <div class="default" :style="styleDefault">
    <DefaultHeader />
    <div class="default-main">
      <RouterView />
    </div>
    <DefaultFooter />
  </div>
</template>

<script setup lang="ts">
  import imageBg from './images/bg.png'

  import DefaultHeader from './DefaultHeader.vue'
  import DefaultFooter from './DefaultFooter.vue'

  import { computed } from 'vue'

  const styleDefault = computed(() => {
    let str = ''
    str += ` background-image: url(${imageBg});`
    return str
  })
</script>

<style lang="scss" scoped>
  .default {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .default-main {
      flex: 1;
      overflow: hidden;
      background-color: #f00;
    }
  }
</style>
