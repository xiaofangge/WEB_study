<template>
  <div id="app">
    <AddItem></AddItem>
    <hr />
    <SubItem></SubItem>
  </div>
</template>

<script>
import AddItem from './components/AddItem.vue'
import SubItem from './components/SubItem.vue'

export default {
  data() {
    return {}
  },
  components: {
    AddItem,
    SubItem,
  },
}
</script>

<style scoped></style>
