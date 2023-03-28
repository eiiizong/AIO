<template>
  <div class="home">
    <Statistics />
    <div class="main">
      <div class="wrapper">
        <HandlingServices />
      </div>
      <div class="wrapper">
        <QueryServices />
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
  import Statistics from './Statistics.vue'
  import HandlingServices from './HandlingServices.vue'
  import QueryServices from './QueryServices.vue'
  import RecommendedServices from './RecommendedServices.vue'
  import QR from './QR.vue'
  import Robot from './Robot.vue'
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
