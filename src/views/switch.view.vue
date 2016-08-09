<template>
    <div>
        <header class="bar bar-nav">
            <div class="nav-left nav-button">
                <a href="#" class="back">
                    <i class="icon icon-back"></i>
                </a>
            </div>
            <h1 class="title">Switch</h1>
            <slot name="right">
                <div class="nav-right nav-button"></div>
            </slot>
        </header>
        <div class="content">
            <div class="content-block-title">Switch component</div>
            <div class="content-block">
                <switch></switch>
            </div>
        </div>
    </div>
</template>

<style lang="less"></style>

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