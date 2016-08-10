<template>
    <div>
        <header class="bar bar-nav">
            <div class="nav-left nav-button">
                <a href="#" class="back">
                    <i class="icon icon-back"></i>
                </a>
            </div>
            <h1 class="title">Radio Group</h1>
            <slot name="right">
                <div class="nav-right nav-button"></div>
            </slot>
        </header>
        <div class="content">
            <!--RADIOS GROUP-->
            <div class="content-block-title">RADIOS GROUP component</div>
            <radio :group.sync="groupOfRadio" name="fruits" :selected.sync="selected"></radio>
            <p>{{selected | json}}</p>

            <!--CHECKBOXES GROUP-->
            <div class="content-block-title">CHECKBOXES GROUP component</div>
            <checkbox :group.sync="groupOfCheckbox"></checkbox>
            <p>{{groupOfCheckbox[0] | json}}</p>
        </div>
    </div>
</template>

<style lang="less"></style>

<script>
    export default {
        data(){
            return {
                groupOfCheckbox: [{
                    title: '香蕉',
                    checked: true
                },{
                    title: '苹果'
                },{
                    title: '栗子',
                    checked: false
                }],
                groupOfRadio: [{
                    title: '香蕉'
                },{
                    title: '苹果',
                    checked: true
                },{
                    title: '栗子'
                }],
                selected: {}
            }
        }
    }
</script>