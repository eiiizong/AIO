<template>
  <div class="home-robot"><img :src="imageRobot" alt="" /></div>
</template>

<script setup lang="ts">
  import imageRobot from './images/robot.gif'
</script>

<style lang="scss" scoped>
  .home-robot {
    position: absolute;
    bottom: 148px;
    right: 20px;
    // width: 550px;
    width: 400px;
    img {
      width: 100%;
    }
  }
</style>
