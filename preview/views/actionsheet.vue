<template>
    <div>
        <header class="bar bar-nav">
            <div class="nav-left nav-button">
                <a href="#" class="back">
                    <i class="icon icon-back"></i>
                </a>
            </div>
            <h1 class="title" >Action Sheet</h1>
            <slot name="right">
                <div class="nav-right nav-button"></div>
            </slot>
        </header>
        <div class="content">
            <div class="content-block-title">action sheet component</div>
            <div class="content-block">
                <a class="button" href="javascript:;" v-on:click="open()">show action sheet</a>
            </div>
        </div>
        <action-sheet :show.sync="show"
                      :buttons.sync="buttons"
                      title="请选择上传图片方式"
                      cancel-txt="取消">
        </action-sheet>
    </div>
</template>

<style type="less"></style>

<script>
    export default {
        data(){
            return {
                show: false,
                buttons: [{
                    txt: '打开相机',
                    fn(){
                        console.log('打开相机');
                    }
                },{
                    txt: '打开相册',
                    fn(){
                        console.log('打开相册');
                    }
                }]
            }
        },
        methods: {
            open(){
                this.show = true;
            },
            close(){
                this.show = false;
            }
        }
    }
</script>