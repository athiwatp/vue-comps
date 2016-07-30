<template>
    <div>
        <header class="bar bar-nav">
            <div class="nav-left nav-button">
                <a href="#" class="back">
                    <i class="icon icon-back"></i>
                </a>
            </div>
            <h1 class="title" >Grid</h1>
            <slot name="right">
                <div class="nav-right nav-button"></div>
            </slot>
        </header>
        <div class="content">
            <div class="content-block">
                <p>Vue-comps comes with flexible layout grid:</p>
            </div>
            <div class="content-block-title">Grid component</div>
            <div class="content-block">
               <grid class="demo">
                   <item col="25">25</item>
                   <item col="50">50</item>
                   <item col="25">25</item>
               </grid>
            </div>
            <div class="content-block">
               <grid class="demo">
                   <item col="50">50</item>
                   <item col="50">50</item>
               </grid>
            </div>
            <div class="content-block">
               <grid class="demo">
                   <item col="75">75</item>
                   <item col="25">25</item>
               </grid>
            </div>
            <div class="content-block-title">Automatic grid component</div>
            <div class="content-block">
               <grid class="demo">
                   <item>1</item>
                   <item>1</item>
                   <item>1</item>
                   <item>1</item>
               </grid>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    .row.demo{
        text-align: center;
        line-height: 30px;
        > [class*="col-"]{
            border: 1px solid #ddd;
        }
    }
</style>

<script>
    export default {}
</script>