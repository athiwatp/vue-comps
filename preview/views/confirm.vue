<template>
    <div>
        <header class="bar bar-nav">
            <div class="nav-left nav-button">
                <a href="#" class="back">
                    <i class="icon icon-back"></i>
                </a>
            </div>
            <h1 class="title" >Confirm</h1>
            <slot name="right">
                <div class="nav-right nav-button"></div>
            </slot>
        </header>
        <div class="content">
            <div class="content-block-title">confirm component</div>
            <div class="content-block">
                <a class="button" href="javascript:;" v-on:click="open()">show confirm</a>
                <p>若以当前这种vue的component方法来使用alert弹出框，无法适应需要连续弹出多个的场景。</p>
            </div>
        </div>
        <confirm :show.sync='showAlert' txt='Monkey King Lei, Are you OK?'></confirm>
    </div>
</template>

<style type="less"></style>

<script>
    export default {
        data(){
            return {
                showAlert: false
            }
        },
        methods: {
            open(){
                this.showAlert = true;
            }
        }
    }
</script>