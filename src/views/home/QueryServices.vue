<template>
  <div class="home-query-service">
    <!-- <div class="title" :style="styleNavTitle">业务查询服务</div> -->
    <div class="title" :style="styleNavTitle"></div>
    <div class="con">
      <div class="item">
        <img :src="imageNav05" alt="" />
        <div class="inner">
          <div class="name">
            <span class="text">补贴标准</span>
            <span class="icon" :style="styleArrow"></span>
          </div>
          <div class="desc">
            <span>查询补贴金额发放标准</span>
          </div>
        </div>
      </div>
      <div class="item">
        <img :src="imageNav06" alt="" />
        <div class="inner">
          <div class="name">
            <span class="text">政策文件</span>
            <span class="icon" :style="styleArrow"></span>
          </div>
          <div class="desc">
            <span>查看国家关于惠民惠农的政策文件</span>
          </div>
        </div>
      </div>
      <div class="item">
        <img :src="imageNav07" alt="" />
        <div class="inner">
          <div class="name">
            <span class="text">公示栏</span>
            <span class="icon" :style="styleArrow"></span>
          </div>
          <div class="desc">
            <span>谁在领补贴可在线查看</span>
          </div>
        </div>
      </div>
      <div class="item">
        <img :src="imageNav08" alt="" />
        <div class="inner">
          <div class="name">
            <span class="text">一卡通宣传小视频</span>
            <span class="icon" :style="styleArrow"></span>
          </div>
          <div class="desc">
            <span>惠民惠农讲解，指导可在线了解</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import imageArrow from './images/arrow.png'
  import imageNavTitle02 from './images/nav-title-02.png'
  import imageNav05 from './images/nav-05.png'
  import imageNav06 from './images/nav-06.png'
  import imageNav07 from './images/nav-07.png'
  import imageNav08 from './images/nav-08.png'

  import { computed } from 'vue'

  const styleNavTitle = computed(() => {
    let str = ''
    str += ` background-image: url(${imageNavTitle02});`
    return str
  })

  const styleArrow = computed(() => {
    let str = ''
    str += ` background-image: url(${imageArrow});`
    return str
  })
</script>

<style lang="scss" scoped>
  .home-query-service {
    width: 516px;
    background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.7) 0%, #ffffff 100%);
    border-radius: 4px;
    padding: 2px;
    margin-left: 40px;
    .title {
      width: 100%;
      height: 70px;
      background-position: top center;
      background-size: cover;
      background-repeat: no-repeat;
      padding: 0 24px;
      .text {
        color: #004ea8;
        font-size: 22px;
        line-height: 70px;
        font-weight: 700;
      }
    }
    .con {
      display: flex;
      flex-wrap: wrap;
      padding: 24px;
      .item {
        width: 220px;
        height: 220px;
        position: relative;
        margin-right: 24px;
        margin-bottom: 24px;
        &:nth-of-type(2n + 2) {
          margin-right: 0;
        }
        &:nth-last-of-type(1),
        &:nth-last-of-type(2) {
          margin-bottom: 0;
        }
        .inner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          font-size: 24px;
          color: #fff;
          padding: 24px;
          .name {
            font-size: 24px;
            line-height: 1;
            .text {
              font-weight: 700;
            }
            .icon {
              display: inline-block;
              width: 16px;
              height: 16px;
              margin-left: 8px;
              background-position: top center;
              background-size: cover;
              background-repeat: no-repeat;
            }
          }
          .desc {
            color: rgba(255, 255, 255, 0.8);
            font-size: 15px;
            line-height: 20px;
            margin-top: 8px;
            .val {
              font-size: 19px;
              color: #fff;
              font-weight: 700;
              padding: 0 2px;
            }
          }
        }
      }
    }
  }
</style>
