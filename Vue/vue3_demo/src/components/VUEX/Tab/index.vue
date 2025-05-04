<!--
 * @author: Fang Ruichuan
 * @since: 2025-04-10
 * index.vue
-->
<template>
  <div class="container">
    <a href="javascript:;" :class="[ { current: curIdx === 0 } ]" @click="setCurIdx(0)">选项1</a>
    <a href="javascript:;" :class="[ { current: curIdx === 1 } ]" @click="setCurIdx(1)">选项2</a>
    <a href="javascript:;" :class="[ { current: curIdx === 2 } ]" @click="setCurIdx(2)">选项3</a>
    <a href="javascript:;" :class="[ { current: curIdx === 3 } ]" @click="setCurIdx(3)">选项4</a>
  </div>
</template>

<script lang="ts">
import { mapState, mapMutations } from 'vuex';

export default {
  name: "Tab",
  computed: {
    ...mapState(['curIdx'])
  },
  methods: {
    ...mapMutations(['setCurIdx'])
  }
}

</script>

<style scoped>
a {
    margin-right: 10px;
    text-decoration: none;
}
</style>
