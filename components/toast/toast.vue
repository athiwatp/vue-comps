<template>
    <div class="toast-overlay" v-if="show"></div>
    <div class="toast-modal {{setClassNames}}" v-if="show" transition="opacity">
        <i class="icon"></i>
        <span class="toast">{{text}}</span>
    </div>
</template>

<style lang="less">
    @import '../style/_mixins.less';
    @import '../style/_var.less';
    @import '../style/icon.less';
    @import '../style/toast.less';
    @import '../style/transition.less';
</style>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                default: false,
                required: true,
                twoWay: true
            },
            className: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: 'Toast',
                required: true
            },
            position: {
                type: String,
                default: ''
            }
        },
        computed: {
            setClassNames() {
                var _classNames = [];
                switch (this.position) {
                    case 'top':
                        _classNames.push('top-toast');
                        break;
                    case 'bottom':
                        _classNames.push('bottom-toast');
                        break;
                    default:
                        _classNames.push('');
                }
                _classNames.push(this.className);
                return _classNames.join(' ');
            }
        }
    }
</script>