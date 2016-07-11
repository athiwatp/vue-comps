<template>
    <div class="content">
        <div class="content-block-title">welcome to vue components.</div>
        <alert :show.sync="showAlert" txt="showAlert"></alert>
    </div>
</template>

<style type="less">
    @import '../assets/style.less';
</style>

<script>
    export default {
        data(){
            return {
                showAlert: false
            }
        }
    }
</script>