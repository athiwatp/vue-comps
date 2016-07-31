<template>
    <div class="actions-modal" v-if="show" transition="slideInUp">
        <div class="actions-modal-group">
            <div class="actions-modal-label" v-if="title">
                {{title}}
            </div>
            <div v-for="button in buttons" class="actions-modal-button" @click="close(button.action)">{{button.txt}}</div>
        </div>
        <div class="actions-modal-group">
            <div class="actions-modal-button actions-modal-button-bold" @click="show=false">{{cancelTxt || 'Cancel'}}</div>
        </div>
    </div>
    <div v-if="show" class="modal-overlay" transition="opacity" @click="show=false"></div>
</template>

<style lang="less">
    @import '../style/_mixins.less';
    @import '../style/_var.less';
    @import '../style/actionsheet.less';
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
            title: String,
            buttons: {
                type: Array,
                required: true,
                twoWay: true
            },
            cancelTxt: String
        },
        methods: {
            close(action){
                if (action && typeof(action) === 'function') {
                    action();
                }
                this.show = false;
            }
        }
    }
</script>