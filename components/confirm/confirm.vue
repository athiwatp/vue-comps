<template>
	<div class="modal" style="margin-top: -64px;" v-if="show" transition="modal">
		<div class="modal-inner">
			<div class="modal-title">提示</div>
			<div class="modal-text">{{txt}}</div>
		</div>
		<div class="modal-buttons">
            <span class="modal-button modal-button-bold" v-on:click="close()">Cancel</span>
			<span class="modal-button modal-button-bold" v-on:click="close()">OK</span>
		</div>
	</div>
	<div v-show="show" class="modal-overlay" transition="opacity"></div>
</template>

<style type="less">
    .modal-overlay{
       opacity: 0;
    }
    .opacity-transition{
        opacity: 1;
    }
    .opacity-enter, .opacity-leave{
        opacity: 0;
    }
    .modal{
        opacity: 0;
        transition-property: transform, opacity;
        transform: translate3d(0,0,0) scale(1.185);
    }
    .modal-transition{
        opacity: 1;
        transition-duration: 400ms;
        transform: translate3d(0,0,0) scale(1);
    }
    .modal-enter, .modal-leave{
        opacity: 0;
        z-index: 13500-1;
        transition-duration: 400ms;
        transform: translate3d(0,0,0) scale(0.85);
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