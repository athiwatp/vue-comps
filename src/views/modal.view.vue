<template>
    <div>
        <header class="bar bar-nav">
            <div class="nav-left nav-button">
                <a href="#" class="back">
                    <i class="icon icon-back"></i>
                </a>
            </div>
            <h1 class="title" >Modal</h1>
            <slot name="right">
                <div class="nav-right nav-button"></div>
            </slot>
        </header>
        <div class="content">
            <div class="content-block-title">Modal</div>
            <div class="content-block">
                <a class="button" href="javascript:;" v-on:click="openAlert()">alert</a>
            </div>
            <div class="content-block">
                <a class="button" href="javascript:;" v-on:click="open()">confirm</a>
            </div>
            <div class="content-block">
                <a class="button" href="javascript:;" v-on:click="open()">pompt</a>
            </div>
        </div>
    </div>
</template>

<style lang="less"></style>

<script>
    import Modal from '../../components/modal/index.js';
    export default {
        data(){
            return {}
        },
        methods: {
            openAlert(){
                Modal.alert('modal alert', function(){
                    console.log('hahah');
                });
            }
        }
    }
</script>