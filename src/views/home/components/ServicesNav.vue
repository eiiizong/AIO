<template>
  <div class="service-nav">
    <!-- <div class="title" :style="styleNavTitle">业务查询服务</div> -->
    <div class="title" :style="styleNavTitle"></div>
    <div class="con">
      <div class="item" v-for="item in renderList" :key="item.id" @click="onClickItem(item)">
        <img :src="item.bgImgSrc" alt="" />
        <div class="inner">
          <div class="name">
            <span class="text">{{ item.name }}</span>
            <span class="icon" :style="styleArrow"></span>
          </div>
          <div class="desc">
            <span
              v-for="(descItem, descIndex) in item.desc"
              :class="descItem.class"
              :key="descIndex">
              {{ descItem.text }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import imageArrow from '../images/arrow.png'

  import type { PropType } from 'vue'
  import { computed } from 'vue'

  const props = defineProps({
    /**
     * 渲染数据
     */
    renderList: {
      type: Array as PropType<any[]>,
      required: true
    },
    /**
     * 标题名称
     */
    title: {
      type: String,
      required: true
    },
    /**
     * 标题名称背景图片链接
     */
    titleBgSrc: {
      type: String,
      required: true
    }
  })

  const styleNavTitle = computed(() => {
    let str = ''
    const { titleBgSrc } = props
    if (titleBgSrc) {
      str += ` background-image: url(${titleBgSrc});`
    }
    return str
  })

  const styleArrow = computed(() => {
    let str = ''
    str += ` background-image: url(${imageArrow});`
    return str
  })

  const onClickItem = (item: any) => {
    console.log(item)
  }
</script>

<style lang="scss" scoped>
  .service-nav {
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
            .value {
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
