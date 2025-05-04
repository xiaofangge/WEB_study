<template>
  <div>
    <button @click="increase(-1)">-</button>
    <input type="number" :value="currentValue" @input="changeValue">
    <button @click="increase(1)">+</button>
  </div>
</template>

<script>
export default {
  name: 'NumberInput',
  props: {
    value: {
      type: Number,
      default: 0,
      required: true
    }
  },
  data() {
    return {
      // 定义变量，来避免对于子组件中props的直接修改
      currentValue: this.value
    }
  },
  watch: {
    // 当组件初始化时从value获取一次值，并且当父组件直接修改v-model绑定值的时候，对于value的及时监听
    value(newVal) {
      this.currentValue = newVal
    }
  },
  methods: {
    // 先修改currentValue，然后通过 $emit('input') 来通知父组件，我们的value的值发生了改变，使父组件的props值进行修改，
    // 再通过父组件的单向数据流，让子组件中的值更新，从而避免对于子组件中props的直接修改
    changeValue(e) {
      this.currentValue = parseInt(e.target.value)
      this.$emit('input', this.currentValue)
    },
    increase(val) {
      console.log('increase val => ', val)
      this.currentValue += val
      this.$emit('input', this.currentValue)
    }
  }
}
</script>
