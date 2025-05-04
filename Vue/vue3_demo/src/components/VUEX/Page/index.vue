<!--
 * @author: Fang Ruichuan
 * @since: 2025-04-11
 * index.vue
-->
<template>
  <div class="container">
    {{ content[curIdx ?? 0] }}
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['state'])
    },
    data() {
        return {
            content: ['页面1', '页面2', '页面3', '页面4']
        }
    }
}
</script>

<style scoped>
</style>
