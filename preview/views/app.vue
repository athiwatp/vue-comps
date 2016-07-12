<template>
    <div class="content">
        <div class="logo"></div>
        <h3>Vue Comps</h3>
        <div class="content-block-title center">welcome to vue components.</div>
        <ul class="list-view">
            <li v-for="item in lists">
                <div class="item-content">
                    <div class="item-media">
                        <i class="icon {{item.icon}}"></i>
                    </div>
                    <div class="item-inner">
                        <div class="item-title">
                            {{item.name}}
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style type="less">
    .logo{
        width: 100%;
        height: 200px;
        margin: 20px 0;
        background: url("../assets/images/hugo.jpg") center center no-repeat;
        background-size: contain;
    }
    h3, .center{
        text-align: center;
    }
    .content-block-title{
        margin-top: 15px;
        text-transform: lowercase;
    }
</style>

<script>
    export default {
        data(){
            return{
                lists: [{
                    name: 'Alert',
                    icon: 'icon-alert'
                },{
                    name: 'Confirm',
                    icon: 'icon-confirm'
                },{
                    name: 'Toast',
                    icon: 'icon-message'
                },{
                    name: 'Panel',
                    icon: 'icon-panel'
                },{
                    name: 'Vritual List',
                    icon: 'icon-list'
                },{
                    name: 'Pull Down',
                    icon: 'icon-pulldown'
                },{
                    name: 'Loading',
                    icon: 'icon-loading'
                },{
                    name: 'Date',
                    icon: 'icon-date'
                },{
                    name: 'Slider',
                    icon: 'icon-slider'
                },{
                    name: 'Notify',
                    icon: 'icon-notify'
                },{
                    name: 'Grid',
                    icon: 'icon-grid'
                }]
            }
        }
    }
</script>