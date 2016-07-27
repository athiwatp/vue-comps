<template>
	<div class="modal" style="margin-top: -64px;" v-if="show" transition="modal">
		<div class="modal-inner">
			<div class="modal-title">{{title}}</div>
			<div class="modal-text">{{txt}}</div>
		</div>
		<div class="modal-buttons">
			<span class="modal-button modal-button-bold" @click="close(button.action)">{{button.txt}}</span>
		</div>
	</div>
	<div v-show="show" class="modal-overlay" transition="opacity"></div>
</template>

<style lang="less"></style>

<script>
export default {
  props: {
  	show: {
        type: Boolean,
        required: true,
        default: false,
        twoWay: true
    },
    txt: {
        type: String,
        required: true
    },
    button: {
        type: Object,
        default() {
            return {
                action: null,
                txt: 'OK'
            }
        },
        twoWay: true
    },
    title: {
        type: String,
        default: '提示'
    }
  },
  methods: {
  	close(action){
        if (action && typeof(action) === 'function') {
            action();
        }
  		this.show = false;
  	}
  }
}
</script>