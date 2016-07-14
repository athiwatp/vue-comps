<template>
    <div>
        <header class="bar bar-nav">
            <div class="nav-left nav-button">
                <a href="#" class="back">
                    <i class="icon icon-back"></i>
                </a>
            </div>
            <h1 class="title" >Preloader</h1>
            <slot name="right">
                <div class="nav-right nav-button"></div>
            </slot>
        </header>
        <div class="content">
            <div class="content-block-title">preloader component</div>
            <div class="content-block">
                <a class="button" href="javascript:;" v-on:click="open()">show preloader</a>
            </div>
        </div>
        <preloader :show.sync="show"></preloader>
    </div>
</template>

<style type="less"></style>

<script>
    export default {
        data(){
            return {
                show: false,
            }
        },
        methods: {
            open(){
                this.show = true;
                setTimeout(()=>{
                    this.show = false;
                }, 3000);
            }
        }
    }
</script>