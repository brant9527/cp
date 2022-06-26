<template>
    <div style="display:flex">
        <left />
        <right style="flex:1"></right>
    </div>
</template>

<script>
import Left from './Left.vue'
import Right from './Right.vue'
export default {
    components: {
        Left,
        Right
    },

};
</script>

<style lang="scss" scoped>
</style>