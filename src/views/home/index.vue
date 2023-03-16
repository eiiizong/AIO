<template>
  <div class="home">123</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    display: flex;
    color: #fff;
    .left {
      display: flex;
      flex-direction: column;
    }
    .right {
      flex: 1;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
  }
</style>
