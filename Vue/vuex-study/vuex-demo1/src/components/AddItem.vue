<template>
  <div>
    <h3>{{ this.$store.getters.showNum }}</h3>
    <button @click="addHandler">+</button>
    <button @click="addThreeHandler">+3</button>
    <button @click="addAsyncHandler">Async +</button>
    <button @click="addThreeAsyncHandler">Async +3</button>
  </div>
</template>

<script>
export default {
  name: 'AddItem',
  data() {
    return {}
  },
  methods: {
    addHandler() {
      this.$store.commit('add')
    },
    addThreeHandler() {
      this.$store.commit('addN', 3)
    },
    addAsyncHandler() {
      this.$store.dispatch('addAsync')
    },
    addThreeAsyncHandler() {
      this.$store.dispatch('addNAsync', 3)
    }
  }
}
</script>
