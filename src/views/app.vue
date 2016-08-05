<template>
    <div class="content">
        <h3>Vue Comps</h3>
        <div class="content-block-title center">welcome to vue components.</div>
        <ul class="list-view">
            <li v-for="item in lists">
                <a href="#{{item.link}}" class="item-link">
                    <div class="item-content">
                        <div class="item-media" v-bind:class="{'off': !item.link}">
                            <i class="icon {{item.icon}}"></i>
                        </div>
                        <div class="item-inner">
                            <div class="item-title">
                                {{item.name}}
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="less">
    h3{
        margin: 15px 0;
        font-size: 18px;
    }
    h3, .center{
        text-align: center;
        font-weight: normal;
        color: #EE6E03;
    }
    .content-block-title.center{
        margin-top: 15px;
        text-transform: lowercase;
        color: #6d6d72;
    }
    .off .icon{
        color: #666;
    }
</style>

<script>
    export default {
        data(){
            return{
                lists: [{
                    name: 'Alert',
                    icon: 'icon-alert',
                    link: '/alert'
                },{
                    name: 'Confirm',
                    icon: 'icon-confirm',
                    link: '/confirm'
                },{
                    name: 'Prompt',
                    icon: 'icon-prompt',
                    link: '/prompt'
                },{
                    name: 'Action Sheet',
                    icon: 'icon-actionsheet',
                    link: '/actionsheet'
                },{
                    name: 'Preloader',
                    icon: 'icon-loading',
                    link: '/preloader'
                },{
                    name: 'Toast',
                    icon: 'icon-toast',
                    link: '/toast'
                },{
                    name: 'Modal',
                    icon: 'icon-message',
                    link: '/modal'
                },{
                    name: 'Notify',
                    icon: 'icon-notify',
                    link: '/notify'
                },{
                    name: 'Popover',
                    icon: 'icon-panel',
                    link: '/popover'
                },{
                    name: 'Grid',
                    icon: 'icon-grid',
                    link: '/grid'
                },{
                    name: 'Infinite Scroll',
                    icon: 'icon-wuxian'
                },{
                    name: 'Pull Down',
                    icon: 'icon-pulldown'
                },{
                    name: 'Vritual List',
                    icon: 'icon-list'
                },{
                    name: 'Photo Browser',
                    icon: 'icon-photo'
                },{
                    name: 'Date',
                    icon: 'icon-date'
                },{
                    name: 'Slider',
                    icon: 'icon-slider'
                }]
            }
        }
    }
</script>