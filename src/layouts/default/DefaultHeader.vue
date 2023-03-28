<template>
  <div class="default-header" :style="styleHeader">
    <div class="address">
      <img :src="imageAddress" alt="" />
      <span>达川区</span>
    </div>
    <div class="old-people">
      <img :src="imageOldPeople" alt="" />
      <span>长者模式</span>
    </div>
    <!-- <div class="title">达州市惠民惠农“一卡通”智能服务站</div> -->
  </div>
</template>

<script setup lang="ts">
  import imageBgHeader from './images/bg-header.png'
  import imageAddress from './images/address.png'
  import imageOldPeople from './images/old-people.png'

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
    position: relative;
    .address {
      position: absolute;
      top: 20px;
      left: 40px;
      border-radius: 26px;
      font-size: 16px;
      color: #ffffff;
      font-weight: 500;
      border: solid 1px rgba(255, 255, 255, 0.24);
      padding: 10px 20px;
      display: flex;
      align-items: center;
      img {
        width: 18px;
        margin-right: 8px;
      }
    }
    .old-people {
      position: absolute;
      top: 20px;
      right: 40px;
      border-radius: 26px;
      font-size: 16px;
      color: #ffffff;
      font-weight: 500;
      border: solid 1px rgba(255, 255, 255, 0.24);
      padding: 10px 20px;
      display: flex;
      align-items: center;
      img {
        width: 20px;
        margin-right: 8px;
      }
    }
  }
</style>
