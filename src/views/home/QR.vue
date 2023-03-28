<template>
  <div class="home-qr">
    <div class="name">扫码关注，补贴信息早知道</div>
    <img :src="image511700" alt="" />
    <div class="desc">达州一卡通阳光审批小程序</div>
  </div>
</template>

<script setup lang="ts">
  import image511700 from './images/qr/511700.png'
</script>

<style lang="scss" scoped>
  .home-qr {
    width: 268px;
    height: 194px;
    background-color: rgba(#fff, 0.36);
    border-radius: 4px;
    margin-left: 40px;
    margin-top: 22px;
    padding: 16px;
    .name {
      color: #343434;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      line-height: 1;
      padding-bottom: 10px;
    }
    img {
      display: block;
      width: 100px;
      margin: 0 auto;
    }
    .desc {
      color: #656565;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      width: 100px;
      margin: 4px auto;
    }
  }
</style>
