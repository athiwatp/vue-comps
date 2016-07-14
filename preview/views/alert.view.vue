<template>
    <div>
        <header class="bar bar-nav">
            <div class="nav-left nav-button">
                <a href="#" class="back">
                    <i class="icon icon-back"></i>
                </a>
            </div>
            <h1 class="title" >Alert</h1>
            <slot name="right">
                <div class="nav-right nav-button"></div>
            </slot>
        </header>
        <div class="content">
            <div class="content-block-title">alert component</div>
            <div class="content-block">
                <a class="button" href="javascript:;" v-on:click="open()">show alert</a>
                <p>若以当前这种vue的component方法来使用alert弹出框，无法适应需要连续弹出多个的场景。</p>
            </div>
        </div>
        <alert :show.sync='showAlert'
               :button.sync='button' 
               title="welcome"
               txt='hello vue comps!'>
        </alert>
    </div>
</template>

<style type="less"></style>

<script>
    export default {
        data(){
            return {
                showAlert: false,
                button: {
                    action(){
                        console.log('click cancel');
                    },
                    txt: '确定'
                }
            }
        },
        methods: {
            open(){
                this.showAlert = true;
            }
        }
    }
</script>