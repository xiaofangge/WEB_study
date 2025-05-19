<template>
  <div>
    <h3>{{ showNum }}</h3>
    <button @click="handleSub">-</button>
    <button @click="handleSubThree">-3</button>
    <button @click="subAsync">Async -</button>
    <button @click="subNAsync(3)">Async -3</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'SubItem',
  data() {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync']),
    handleSub() {
      this.sub();
    },
    handleSubThree() {
      this.subN(3)
    }
  }
}
</script>
