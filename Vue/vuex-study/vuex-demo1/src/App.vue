<template>
  <div id="app">
    <Add></Add>
    <hr />
    <Sub></Sub>
  </div>
</template>

<script>
import Add from './components/Add.vue'
import Sub from './components/Sub.vue'

export default {
  data() {
    return {}
  },
  components: {
    Add,
    Sub,
  },
}
</script>

<style scoped></style>
