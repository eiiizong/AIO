<template>
  <div class="default-footer" :style="styleFooter">
    <div class="left">
      <div class="cells">
        <div class="cell">
          <div class="key">终端设备编号：</div>
          <div class="value">YH00001</div>
        </div>
      </div>
      <div class="cells">
        <div class="cell">
          <div class="key">建设单位：</div>
          <div class="value">达州市财政局</div>
        </div>
        <div class="cell">
          <div class="key">技术支持：</div>
          <div class="value">四川久远银海软件股份有限公司</div>
        </div>
      </div>
    </div>
    <div class="center">
      <!-- 已登陆 -->
      <div class="logged-in">
        <!-- <button class="button">退出登陆</button> -->
      </div>
      <!-- 未登陆 -->
      <div class="not-logged-in">
        <button class="button">立即登录</button>
      </div>
    </div>
    <div class="right">
      <div class="cells">
        <div class="cell">{{ nowDate }}</div>
        <div class="cell AlibabaPuHuiTi">{{ nowTime }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import imageBgFooter from './images/bg-footer.png'

  import { computed, ref, onMounted } from 'vue'
  import moment from 'moment'

  const nowDate = ref('')
  const nowTime = ref('')
  const timer = ref<any>(null)

  const styleFooter = computed(() => {
    let str = ''
    str += ` background-image: url(${imageBgFooter});`
    return str
  })

  // 获取当前时间
  const getNowDate = () => {
    let str: string = moment().format('YYYY年MM月DD日')
    let weekNumber = moment().day()

    let week = '' // 星期
    switch (weekNumber) {
      case 1:
        week = '星期一'
        break
      case 2:
        week = '星期二'
        break
      case 3:
        week = '星期三'
        break
      case 4:
        week = '星期四'
        break
      case 5:
        week = '星期五'
        break
      case 6:
        week = '星期六'
        break
      case 0:
        week = '星期日'
        break
      default:
        break
    }

    nowDate.value = `${str}  ${week}`
    nowTime.value = moment().format('HH:mm:ss')
  }

  onMounted(() => {
    getNowDate()
    timer.value = setInterval(() => {
      getNowDate()
    }, 1000)
  })
</script>

<style lang="scss" scoped>
  .default-footer {
    width: 100%;
    height: 5.375rem;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    padding: 0 40px;
    padding: 0 2.5rem;
    display: flex;
    align-items: center;
    white-space: nowrap;
    .left,
    .right {
      width: 30%;
      .cells {
        color: #ffffff;
        display: flex;
        align-items: center;
        .cell {
          display: flex;
          align-items: center;
        }
      }
    }
    .left {
      font-size: 0.875rem;
      line-height: 1.25rem;
      .cells {
        &:last-child {
          padding-top: 0.375rem;
          .cell {
            &:last-child {
              padding-left: 2rem;
            }
          }
        }
      }
    }
    .center {
      flex: 1;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      .button {
        width: 10.25rem;
        height: 4rem;
        background-image: linear-gradient(to top, #ffc700 0%, #ff8c40 100%);
        border-radius: 60rem;
        color: #fff;
        font-size: 1.375rem;
        font-weight: 700;
        line-height: 3.25rem;
        text-align: center;
        padding: 0;
        margin: 0;
        border: 0.375rem solid #62a9ff;
        user-select: none;
        cursor: pointer;
      }
    }
    .right {
      font-size: 1.125rem;
      line-height: 1.5rem;

      .cells {
        justify-content: flex-end;
        .cell {
          font-weight: 500;
          &:last-child {
            width: 8.125rem;
            font-size: 1.75rem;
            line-height: 2.376rem;
            font-weight: 500;
            justify-content: flex-end;
          }
        }
      }
    }
  }
</style>
