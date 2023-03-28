<template>
  <div class="home">
    <Statistics />
    <div class="main">
      <div class="wrapper">
        <ComponentServicesNav
          title="业务办理服务"
          :render-list="handlingServicesList"
          :title-bg-src="imageNavTitle01" />
      </div>
      <div class="wrapper">
        <ComponentServicesNav
          title="业务查询服务"
          :render-list="queryServicesList"
          :title-bg-src="imageNavTitle02" />
      </div>
      <div class="wrapper">
        <RecommendedServices />
        <QR />
      </div>
    </div>
    <Robot />
  </div>
</template>

<script setup lang="ts">
  import imageNavTitle01 from './images/nav-title-01.png'
  import imageNavTitle02 from './images/nav-title-02.png'

  import imageNav01 from './images/nav-01.png'
  import imageNav02 from './images/nav-02.png'
  import imageNav03 from './images/nav-03.png'
  import imageNav04 from './images/nav-04.png'
  import imageNav05 from './images/nav-05.png'
  import imageNav06 from './images/nav-06.png'
  import imageNav07 from './images/nav-07.png'
  import imageNav08 from './images/nav-08.png'

  import Statistics from './Statistics.vue'
  import RecommendedServices from './RecommendedServices.vue'
  import QR from './QR.vue'
  import Robot from './Robot.vue'
  import ComponentServicesNav from './components/ServicesNav.vue'

  import { ref } from 'vue'

  /**
   * 业务办理服务数据
   */
  const handlingServicesList = ref<any>([
    {
      id: 'wysb',
      name: '我要申报',
      desc: [
        {
          text: '当前有个',
          class: ''
        },
        {
          text: '45',
          class: 'value'
        },
        {
          text: '项目可以在线申报',
          class: ''
        }
      ],
      path: '',
      bgImgSrc: imageNav01
    },
    {
      id: 'wycmbz',
      name: '我要查明白折',
      desc: [
        {
          text: '身份证、社保卡放在一体机上就可以查询补贴明细',
          class: ''
        }
      ],
      path: '',
      bgImgSrc: imageNav02
    },
    {
      id: 'wybshbzk',
      name: '我要办社会保障卡',
      desc: [
        {
          text: '社保卡，连心卡，民生卡',
          class: ''
        }
      ],
      path: '',
      bgImgSrc: imageNav03
    },
    {
      id: 'wytsjb',
      name: '我要投诉举报',
      desc: [
        {
          text: '在线举报违规行为',
          class: ''
        }
      ],
      path: '',
      bgImgSrc: imageNav04
    }
  ])

  /**
   * 业务查询服务数据
   */
  const queryServicesList = ref<any>([
    {
      id: 'btbz',
      name: '补贴标准',
      desc: [
        {
          text: '查询补贴金额发放标准',
          class: ''
        }
      ],
      path: '',
      bgImgSrc: imageNav05
    },
    {
      id: 'zcwj',
      name: '政策文件',
      desc: [
        {
          text: '查看国家关于惠民惠农的政策文件',
          class: ''
        }
      ],
      path: '',
      bgImgSrc: imageNav06
    },
    {
      id: 'gsl',
      name: '公示栏',
      desc: [
        {
          text: '谁在领补贴可在线查看',
          class: ''
        }
      ],
      path: '',
      bgImgSrc: imageNav07
    },
    {
      id: 'yktxcxsp',
      name: '一卡通宣传小视频',
      desc: [
        {
          text: '惠民惠农讲解，指导可在线了解',
          class: ''
        }
      ],
      path: '',
      bgImgSrc: imageNav08
    }
  ])
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    padding-left: 100px;
    padding-top: 148px - 116px;
    .main {
      padding-top: 60px;
      display: flex;
    }
  }
</style>
