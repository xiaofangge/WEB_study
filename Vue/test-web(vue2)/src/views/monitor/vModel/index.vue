<template>
  <div>
    <NumberInput v-model="number" />
  </div>
</template>

<script>
import NumberInput from '@/components/NumberInput'

export default {
  components: {
    NumberInput
  },
  data() {
    return {
      number: 10
    }
  }
}
</script>
