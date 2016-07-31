<template>
    <div class="notifications" v-if="show" transition="slideInDown">
        <ul class="list-view media-list">
            <li class="notification-item">
                <div class="item-content">
                    <div class="item-inner no-arrow">
                        <div class="item-title-row">
                            <div class="item-title">{{title}}</div>
                            <div class="item-after">
                                <a href="javascript:;" @click="show=false" class="close-notification"><span></span></a>
                            </div>
                        </div>
                        <div class="item-text"><slot></slot></div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="less">
    @import '../style/_mixins.less';
    @import '../style/_var.less';
    @import '../style/notify.less';
    @import '../style/transition.less';
</style>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                required: true,
                default: false,
                twoWay: true
            },
            title: {
                type: String,
                default: '提示',
            }
        }
    }
</script>