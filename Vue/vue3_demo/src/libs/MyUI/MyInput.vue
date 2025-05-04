<!--  -->
<template>
    <div>
        <input class="my-input" type="text" placeholder="placeholderText" />
    </div>
</template>

<script lang="ts">
export default {
    name: 'MyInput',
    props: {
        placeholderText: {
            type: String,
            default: 'This is my input'
        }
    }
}
</script>

<style lang="scss" scoped>
    .my-input {
        width: 180px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px;
    }
</style>