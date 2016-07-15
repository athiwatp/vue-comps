<template>
    <div>
        <header class="bar bar-nav">
            <div class="nav-left nav-button">
                <a href="#" class="back">
                    <i class="icon icon-back"></i>
                </a>
            </div>
            <h1 class="title" >Toast</h1>
            <slot name="right">
                <div class="nav-right nav-button"></div>
            </slot>
        </header>
        <div class="content">
            <div class="content-block-title">toast component</div>
            <div class="content-block">
                <a class="button" href="javascript:;" v-on:click="open('default')">show default toast</a>
            </div>
            <div class="content-block-title">icon toast (success, warn, error)</div>
            <div class="content-block">
                <a class="button" href="javascript:;" v-on:click="open('icon')">show icon toast</a>
            </div>
            <div class="content-block-title">bottom toast</div>
            <div class="content-block">
                <a class="button" href="javascript:;" v-on:click="open('postion')">show bottom toast</a>
            </div>
        </div>
        <toast :show.sync="show.default"
               text="注册成功 =,=!">
        </toast>
        <toast :show.sync="show.icon"
               text="发生错误"
               class-name="icon-toast warn-toast">
        </toast>
        <toast :show.sync="show.postion"
               text="定位到底部"
               position="bottom">
        </toast>
    </div>
</template>

<style type="less"></style>

<script>
    export default {
        data(){
            return {
                show: {
                    default: false,
                    icon: false,
                    postion: false
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