<template>
    <div class="{{'col-' + col}}">
        <slot></slot>
    </div>
</template>

<style></style>

<script>
    export default {
        props: {
            col: {
                type: String,
                default: 'auto'
            }
        }
    }
</script>