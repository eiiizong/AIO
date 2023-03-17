<template>
  <div class="demo">
    <div class="left">
      <ul>
        <li v-for="item in data" :key="item.id">
          <RouterLink :to="'/demo/' + item.path">{{ item.name }}</RouterLink>
        </li>
      </ul>
    </div>
    <div class="right">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const data = ref([
    {
      id: '01',
      path: 'use-axios',
      name: '使用 axios 示例'
    },
    {
      id: '012',
      path: 'use-echart-pie',
      name: '使用 echart-pie 示例'
    },
    {
      id: '02',
      path: 'use-element-plus',
      name: '使用 Element Plus 组件 示例'
    },
    {
      id: '03',
      path: 'use-language',
      name: '使用 language 示例'
    },
    {
      id: '04',
      path: 'use-pinia',
      name: '使用 pinia 示例'
    },
    {
      id: '05',
      path: 'use-theme',
      name: '使用 theme 示例'
    },
    {
      id: '06',
      path: 'use-pinia',
      name: '使用 pinia 示例'
    },
    {
      id: '07',
      path: 'use-theme',
      name: '使用 theme 示例'
    }
  ])
</script>

<style lang="scss" scoped>
  $bgc: rgba(#ddd, 0.4);
  $br: 10px;
  .demo {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    padding: 20px;

    .right {
      flex: 1;
      overflow: hidden;
      background-color: $bgc;
      border-radius: $br;
      padding: 20px;
      height: 100%;
    }
    .left {
      background-color: $bgc;
      padding: 20px;
      height: 100%;
      margin-right: 20px;
      border-radius: $br;
      overflow: auto;

      @include scrollBar(4px, 4px, #333, #eee);

      ul {
        li {
          margin-bottom: 10px;
          a {
            display: block;
            min-width: 240px;
            color: #333;
            transition: all 0.3s;
            cursor: pointer;
            @include noSelect;
            &:hover,
            &.active {
              text-decoration: underline;
              color: $primary;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
</style>
