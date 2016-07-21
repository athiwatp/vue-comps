<template>
    <div class="modal" style="margin-top: -64px;" v-if="show" transition="modal">
		<div class="modal-inner">
			<div class="modal-title">{{title}}</div>
			<div class="modal-text">{{txt}}</div>
            <div class="input-field">
                <input type="text" v-model="input" class="modal-text-input">
            </div>
		</div>
		<div class="modal-buttons">
            <span class="modal-button modal-button-bold" @click="close(buttons[0].action)">{{buttons[0].text}}</span>
			<span class="modal-button modal-button-bold" @click="close(buttons[1].action)">{{buttons[1].text}}</span>
		</div>
	</div>
	<div v-show="show" class="modal-overlay" transition="opacity"></div>
</template>

<style></style>

<script>
    export default {
        data(){
            return {
                input: ''
            }
        },
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
                default(){
                    return [{
                        text: '取消',
                        action: null
                    },{
                        text: '确定',
                        action: null
                    }]
                }
            }
        },
        methods: {
            close(action){
                if (action && typeof(action) === 'function') {
                    action(this.input);
                }
                this.show = false;
                this.input = '';
            }
        }
    }
</script>