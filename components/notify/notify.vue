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

<style type="less">
    .notifications{
        transition-property: transform;
        transform: translate3d(0, -100%, 0);
    }
    .slideInDown-transition{
        transition-duration: 400ms;
        transform: translate3d(0, 0, 0);
    }
    .slideInDown-enter, .slideInDown-leave{
        transition-duration: 400ms;
        transform: translate3d(0, -100%, 0);
    }
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