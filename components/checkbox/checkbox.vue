<template>
    <ul class="list-view">
        <li v-for="item in group">
            <label class="label-checkbox item-content">
                <input type="checkbox" name="" value="{{item.title}}" v-model="item.checked" :disabled="item.disabled">
                <div class="item-media">
                    <i class="icon icon-form-checkbox"></i>
                </div>
                <div class="item-inner">
                    <div class="item-title">{{item.title}}</div>
                </div>
            </label>
        </li>
    </ul>
</template>

<style lang="less"> 
    @import '../style/_mixins.less';
    @import '../style/_var.less';
    @import '../style/checkbox.less';
</style>

<script>
    export default {
        props: {
            group: {
                type: Array,
                required: true,
                twoWay: true
            }
        }
    } 
</script>