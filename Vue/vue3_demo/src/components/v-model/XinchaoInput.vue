<!--  -->
<template>
    <div>
        <input type="text"
        :value="username"
        @input="emit('update:username', (<HTMLInputElement>$event.target)!.value)" />
        <br>
        <input type="text"
        :value="pwd"
        @input="emit('update:pwd', (<HTMLInputElement>$event.target)!.value)" />
    </div>
</template>

<script setup lang="ts">
defineProps(['username', 'pwd'])
const emit = defineEmits(['update:username', 'update:pwd'])

</script>

<style lang="scss" scoped>
input {
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 2px;
    background-color: darkcyan;
    color: white;
}
</style>