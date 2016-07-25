import alert from './alert/alert.vue'
import confirm from './confirm/confirm.vue'
import prompt from './prompt/prompt.vue'
import actionSheet from './actionsheet/actionsheet.vue'
import preloader from './preloader/preloader.vue'
import toast from './toast/toast.vue'
import notify from './notify/notify.vue'
import grid from './grid/grid.vue'
import item from './grid/grid.item.vue'

export default {
    install(Vue){
        Vue.component('alert', alert);
        Vue.component('confirm', confirm);
        Vue.component('prompt', prompt);
        Vue.component('actionSheet', actionSheet);
        Vue.component('preloader', preloader);
        Vue.component('toast', toast);
        Vue.component('notify', notify);
        Vue.component('grid', grid);
        Vue.component('item', item);
    }
}