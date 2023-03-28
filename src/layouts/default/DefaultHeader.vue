<template>
  <div class="default-header" :style="styleHeader">
    <div class="address item">
      <img :src="imageAddress" alt="" />
      <span>达川区</span>
    </div>
    <div class="old-people item">
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
    height: 7.25rem;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    position: relative;
    .item {
      position: absolute;
      top: 0;
      height: 2.75rem;
      margin-top: calc((5.125rem - 2.75rem) / 2);
      border-radius: 26rem;
      font-size: 1rem;
      color: #ffffff;
      font-weight: 500;
      border: solid 1px rgba(255, 255, 255, 0.24);
      padding: 0 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      user-select: none;
      img {
        width: 1.125rem;
        margin-right: 8px;
      }
      &.address {
        left: 2.5rem;
      }
      &.old-people {
        right: 2.5rem;
        img {
          width: 1.25rem;
        }
      }
    }
  }
</style>
