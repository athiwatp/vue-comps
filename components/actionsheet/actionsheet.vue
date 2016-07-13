<template>
    <div class="actions-modal" v-if="show" transition="slideInUp">
        <div class="actions-modal-group">
            <div class="actions-modal-label" v-if="title">
                {{title}}
            </div>
            <div v-for="button in buttons" class="actions-modal-button" v-on:click="button.fn">{{button.txt}}</div>
        </div>
        <div class="actions-modal-group">
            <div class="actions-modal-button actions-modal-button-bold" v-on:click="close()">{{cancelTxt || 'Cancel'}}</div>
        </div>
    </div>
    <div v-if="show" class="modal-overlay" transition="opacity" v-on:click="close()"></div>
</template>

<style type="less">
    .actions-modal{
        transition-property: transform;
        transform: translate3d(0, 100%, 0);
    }
    .slideInUp-transition{
        transition-duration: 400ms;
        transform: translate3d(0, 0, 0);
    }
    .slideInUp-enter, .slideInUp-leave{
        transition-duration: 400ms;
        transform: translate3d(0, 100%, 0);
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
            title: String,
            buttons: {
                type: Array,
                required: true,
                twoWay: true
            },
            cancelTxt: String
        },
        methods: {
            close(){
                this.show = false;
            }
        }
    }
</script>