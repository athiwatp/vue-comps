<template>
    <div class="preloader-indicator-overlay" v-if="show"></div>
    <div class="preloader-indicator-modal" v-if="show">
        <i class="preloader preloader-white"></i>
        <span v-if="text">{{text}}</span>
    </div>
</template>

<style lang="less">
    @import '../style/_mixins.less';
    @import '../style/_var.less';
    @import '../style/preloader.less';
    @import '../style/transition.less';
</style>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                default: false,
                required: true,
                twoWay: true
            },
            text: String
        }
    }
</script>