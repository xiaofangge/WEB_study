<template>
  <div>
    <h1>这是主应用</h1>
    <WujieVue name="vue3" url="http://localhost:5174/"></WujieVue>
    <WujieVue name="react" url="http://localhost:5175/"></WujieVue>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
</script>

<style scoped lang="less">
</style>