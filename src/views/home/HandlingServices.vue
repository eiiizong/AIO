<template>
  <div class="home-handling-service">
    <!-- <div class="title" :style="styleNavTitle">业务办理服务</div> -->
    <div class="title" :style="styleNavTitle"></div>
    <div class="con">
      <div class="item">
        <img :src="imageNav01" alt="" />
        <div class="inner">
          <div class="name">
            <span class="text">我要申报</span>
            <span class="icon" :style="styleArrow"></span>
          </div>
          <div class="desc">
            <span>当前有个</span>
            <span class="val">43</span>
            <span>项目可以在线申报</span>
          </div>
        </div>
      </div>
      <div class="item">
        <img :src="imageNav02" alt="" />
        <div class="inner">
          <div class="name">
            <span class="text">我要查明白折</span>
            <span class="icon" :style="styleArrow"></span>
          </div>
          <div class="desc">
            <span>身份证、社保卡放在一体机上就可以查询补贴明细</span>
          </div>
        </div>
      </div>
      <div class="item">
        <img :src="imageNav03" alt="" />
        <div class="inner">
          <div class="name">
            <span class="text">我要办社会保障卡</span>
            <span class="icon" :style="styleArrow"></span>
          </div>
          <div class="desc">
            <span>社保卡，连心卡，民生卡</span>
          </div>
        </div>
      </div>
      <div class="item">
        <img :src="imageNav04" alt="" />
        <div class="inner">
          <div class="name">
            <span class="text">我要投诉举报</span>
            <span class="icon" :style="styleArrow"></span>
          </div>
          <div class="desc">
            <span>在线举报违规行为</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import imageArrow from './images/arrow.png'
  import imageNavTitle01 from './images/nav-title-01.png'
  import imageNav01 from './images/nav-01.png'
  import imageNav02 from './images/nav-02.png'
  import imageNav03 from './images/nav-03.png'
  import imageNav04 from './images/nav-04.png'

  import { computed } from 'vue'

  const styleNavTitle = computed(() => {
    let str = ''
    str += ` background-image: url(${imageNavTitle01});`
    return str
  })

  const styleArrow = computed(() => {
    let str = ''
    str += ` background-image: url(${imageArrow});`
    return str
  })
</script>

<style lang="scss" scoped>
  .home-handling-service {
    width: 516px;
    background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.7) 0%, #ffffff 100%);
    border-radius: 4px;
    padding: 2px;
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
