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
                <a class="button" href="javascript:;" v-on:click="openConfirm()">confirm</a>
            </div>
            <div class="content-block">
                <a class="button" href="javascript:;" v-on:click="openPormpt()">pompt</a>
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
                    console.log('alert');
                });
            },
            openConfirm(){
                Modal.confirm('modal confirm', function(){
                    console.log('confirm ok!');
                },function(){
                    console.log('confirm cancel!');
                });
            },
            openPormpt(){
                Modal.prompt('modal prompt', function(val){
                    console.log('prompt ok:' + val);
                },function(){
                    console.log('prompt cancel!');
                });
            }
        }
    }
</script>