<template>
    <div>
        <header class="bar bar-nav">
            <div class="nav-left nav-button">
                <a href="#" class="back">
                    <i class="icon icon-back"></i>
                </a>
            </div>
            <h1 class="title" >Notify</h1>
            <slot name="right">
                <div class="nav-right nav-button"></div>
            </slot>
        </header>
        <div class="content">
            <div class="content-block-title">notify component</div>
            <div class="content-block">
                <a class="button" href="javascript:;" v-on:click="open()">show default notify</a>
            </div>
        </div>
        <notify :show.sync='show' title="提示">This is a simple notification message with title and message</notify>
    </div>
</template>

<style type="less"></style>

<script>
    export default {
        data(){
            return {
                show: false
            }
        },
        methods: {
            open(){
                this.show = true;
            }
        }
    }
</script>