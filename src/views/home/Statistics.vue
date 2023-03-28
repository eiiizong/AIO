<template>
  <div class="home-statistics">
    <div class="cell">
      <img :src="imageIcon01" alt="" class="icon" />
      <div class="key">服务</div>
      <div class="value AlibabaPuHuiTi">2,143</div>
      <div class="unit">人次</div>
    </div>
    <div class="cell">
      <img :src="imageIcon02" alt="" class="icon" />
      <div class="key">申报</div>
      <div class="value AlibabaPuHuiTi">2,143</div>
      <div class="unit">人次</div>
    </div>
    <div class="cell">
      <img :src="imageIcon03" alt="" class="icon" />
      <div class="key">查询</div>
      <div class="value AlibabaPuHuiTi">2,143</div>
      <div class="unit">人次</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import imageIcon01 from './images/icon-01.png'
  import imageIcon02 from './images/icon-02.png'
  import imageIcon03 from './images/icon-03.png'
</script>

<style lang="scss" scoped>
  .home-statistics {
    width: 100%;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    .cell {
      display: flex;
      align-items: center;
      line-height: 58px;
      margin-right: 200px;
      background-image: linear-gradient(to right, #fff, rgba(#fff, 0));
      padding-right: 28px;
      &:nth-of-type(2) {
        .value {
          color: #0a7bff;
        }
      }
      &:last-child {
        margin-right: 0;
        .value {
          color: #19b477;
        }
      }
    }
    .icon {
      width: 58px;
      height: 58px;
      background-color: #eee;
    }
    .key {
      font-size: 24px;
      color: #343434;
      padding: 0 16px;
      font-weight: 500;
    }
    .value {
      color: #ff8600;
      font-size: 36px;
    }
    .unit {
      font-size: 20px;
      color: #999999;
      padding-left: 8px;
    }
  }
</style>
