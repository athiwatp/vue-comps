<template>
    <div>
        <header class="bar bar-nav">
            <div class="nav-left nav-button">
                <a href="#" class="back">
                    <i class="icon icon-back"></i>
                </a>
            </div>
            <h1 class="title" >Prompt</h1>
            <slot name="right">
                <div class="nav-right nav-button"></div>
            </slot>
        </header>
        <div class="content">
            <div class="content-block-title">prompt component</div>
            <div class="content-block">
                <a class="button" href="javascript:;" v-on:click="open()">show prompt</a>
            </div>
            <div class="content-block">
                <p>输入值：{{input}}</p>
            </div>
        </div>
        <prompt :show.sync='show' :buttons='buttons' txt='What your name?'></prompt>
    </div>
</template>

<style lang="less"></style>

<script>
    export default {
        data(){
            let self = this;
            return {
                show: false,
                input: '',
                buttons: [{
                    text: '不告诉你',
                    action(){
                        self.input = '不告诉你';
                    }
                },{
                    text: '嗯嗯',
                    action(val){
                        self.input = val;
                    }
                }]
            }
        },
        methods: {
            open(){
                this.show = true;
            }
        }
    }
</script>