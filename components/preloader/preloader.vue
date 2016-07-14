<template>
    <div class="preloader-indicator-overlay" v-if="show"></div>
    <div class="preloader-indicator-modal" v-if="show">
        <span class="preloader preloader-white"></span>
    </div>
</template>

<style type="less">
    @import './preloader.less';
</style>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                default: false,
                required: true,
                twoWay: true
            }
        }
    }
</script>