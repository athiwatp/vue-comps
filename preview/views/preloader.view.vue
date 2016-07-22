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
                <a class="button" href="javascript:;" v-on:click="open('default')">show default preloader</a>
            </div>
            <div class="content-block-title">preloader width text</div>
            <div class="content-block">
                <a class="button" href="javascript:;" v-on:click="open('text')">show text preloader</a>
            </div>
        </div>
        <preloader :show.sync="show.default"></preloader>
        <preloader :show.sync="show.text" text="加载中.."></preloader>
    </div>
</template>

<style lang="less"></style>

<script>
    export default {
        data(){
            return {
                show: {
                    default: false,
                    text: false
                }
            }
        },
        methods: {
            open(type){
                this.show[type] = true;
                setTimeout(()=>{
                    this.show[type] = false;
                }, 2000);
            }
        }
    }
</script>