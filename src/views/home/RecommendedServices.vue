<template>
  <div class="home-recommend-services">
    <div class="name">大数据智能补贴推荐项目</div>
    <div class="items">
      <div class="item" v-for="item in recommendList" :key="item.id" :style="styleItem">
        <img :src="imageIcon04" alt="" class="icon" />
        <div class="info">
          <div class="cell">{{ item.name }}</div>
          <div class="cell">
            <div class="key">补贴对象：</div>
            <div class="value">{{ item.desc }}</div>
          </div>
        </div>
        <button class="button">
          <img :src="imageIcon05" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import imageIcon04 from './images/icon-04.png'
  import imageIcon05 from './images/icon-05.png'
  import imageBgItem from './images/bg-item.png'

  import { ref, computed } from 'vue'

  const recommendList = ref([
    {
      id: 1,
      name: '残疾人汽车补贴',
      desc: '残疾人'
    },
    {
      id: 2,
      name: '残疾人汽车补贴',
      desc: '残疾人'
    },
    {
      id: 3,
      name: '残疾人汽车补贴',
      desc: '残疾人'
    }
  ])

  const styleItem = computed(() => {
    let str = ''
    str += ` background-image: url(${imageBgItem});`
    return str
  })
</script>

<style lang="scss" scoped>
  .home-recommend-services {
    margin-left: 40px;
    width: 468px;
    height: 366px;
    background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.7) 0%, rgba(#ffffff, 0.8) 100%);
    border-radius: 4px;
    border: solid 2px #ffffff;
    padding: 24px;
    .name {
      font-size: 22px;
      color: #343434;
      font-weight: 500;
      line-height: 1;
    }
    .items {
      padding-top: 24px;
      .item {
        width: 100%;
        height: 80px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        padding: 24px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
        cursor: pointer;
        user-select: none;

        .icon {
          width: 48px;
          height: 48px;
        }
        .info {
          flex: 1;
          overflow: hidden;
          padding: 0 16px;
          font-size: 18px;
          line-height: 1;
          color: #333333;
          .cell {
            display: flex;
            align-items: center;
            &:last-child {
              font-size: 14px;
              color: #999;
              line-height: 1;
              padding-top: 12px;
            }
          }
        }
        .button {
          display: flex;
          cursor: pointer;
          user-select: none;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
