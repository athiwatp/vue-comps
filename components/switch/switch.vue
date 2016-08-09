<template>
    <label class="label-switch">
        <input type="checkbox" v-model="checked" :disabled="disabled">
        <div class="checkbox"></div>
    </label>
</template>

<style lang="less"> 
    @import '../style/_mixins.less';
    @import '../style/_var.less';
    @import '../style/switch.less';
</style>

<script>
    export default {
        props: {
            checked: {
                type: Boolean,
                defalut: false,
                twoWay: true
            },
            disabled: {
                type: Boolean,
                defalut: false
            }
        }
    } 
</script>