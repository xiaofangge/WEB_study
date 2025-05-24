<!--
 * @author: Fang Ruichuan
 * @since: 2025-05-24
 * BaseDialog.vue
-->
<template>
  <div v-show="isShow" class="dialog">
    <div class="dialog-content">
        <h2>这是一个弹框</h2>
        <button @click="closeDialog">关闭</button>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        isShow: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeDialog() {
            this.$emit('update:isShow', false)
        }
    }
}
</script>

<style scoped lang="css">
.dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
   
}
.dialog-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
}
</style>
