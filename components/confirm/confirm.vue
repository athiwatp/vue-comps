<template>
	<div class="modal" style="margin-top: -64px;" v-if="show" transition="modal">
		<div class="modal-inner">
			<div class="modal-title">{{title}}</div>
			<div class="modal-text">{{txt}}</div>
		</div>
		<div class="modal-buttons">
            <span class="modal-button modal-button-bold" @click="close(buttons[0].action)">{{buttons[0].txt}}</span>
			<span class="modal-button modal-button-bold" @click="close(buttons[1].action)">{{buttons[1].txt}}</span>
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
    title: {
        type: String,
        default: '提示'
    },
    buttons: {
        type: Array,
        twoWay: true,
        default(){
            return [{
                txt: '取消',
                action: null
            },{
                txt: '确定',
                action: null
            }]
        }
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