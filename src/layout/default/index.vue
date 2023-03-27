<template>
  <div class="page">
    <DefaultHeader />
    <div class="default-main">
      <RouterView />
    </div>
    <DefaultFooter />
  </div>
</template>

<script setup lang="ts">
  import DefaultHeader from './DefaultHeader.vue'
  import DefaultFooter from './DefaultFooter.vue'
</script>

<style></style>
