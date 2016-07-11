<template>
	<div :class="{
    'modal': true,
    'modal-in': show,
    'modal-out': out
  	}" 
  	style="margin-top: -64px;">
		<div class="modal-inner">
			<div class="modal-title">提示</div>
			<div class="modal-text">{{txt}}</div>
		</div>
		<div class="modal-buttons ">
			<span class="modal-button modal-button-bold" v-on:click="close()">OK</span>
		</div>
	</div>
	<div v-show="show" class="modal-overlay"></div>
</template>

<style type="less">
    .modal {
        display: none;
    }
</style>

<script>
export default {
  props: {
  	show: {
      type: Boolean,
      required: true,
      default: false,
      twoWay: true
    },
    out: {
      type: Boolean,
      default: false
    },
    txt: {
      type: String
    }
  },
  methods: {
  	close(){
  		this.show = false;
  		this.out = true;
  		setTimeout(()=>{
  			this.out = false;
  		}, 1000);
  	}
  }
}
</script>