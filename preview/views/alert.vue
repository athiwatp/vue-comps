<template>
    <div>
        <header class="bar bar-nav">
            <div class="nav-left nav-button">
                <a href="#" class="back">
                    <i class="icon icon-back"></i>
                </a>
            </div>
            <h1 class="title" >Alert</h1>
            <slot name="right">
                <div class="nav-right nav-button"></div>
            </slot>
        </header>
        <div class="content">
            <div class="content-block">
                <a href="javascript:;" class="button">show alert</a>
            </div>
        </div>
    </div>
</template>

<style type="less">
   
</style>

<script>
    export default {}
</script>