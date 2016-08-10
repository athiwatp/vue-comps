<template>
    <ul class="list-view">
        <li v-for="item in group">
            <label class="label-radio item-content">
                <!-- Checked by default -->
                <input type="radio" :name="name" v-model="selected" :value="item" :checked="item.checked" :disabled="item.disabled">
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
    @import '../style/radio.less';
</style>

<script>
    export default {
        props: {
            group: {
                type: Array,
                required: true,
                twoWay: true
            },
            name: {
                type: String,
                default: 'my-radio'
            },
            selected: {
                type: Object,
                twoWay: true
            }
        }
    } 
</script>