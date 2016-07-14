import alert from './alert/alert.vue'
import confirm from './confirm/confirm.vue'
import actionSheet from './actionsheet/actionsheet.vue'
import preloader from './preloader/preloader.vue'
import toast from './toast/toast.vue'

export default {
    install(Vue){
        Vue.component('alert', alert);
        Vue.component('confirm', confirm);
        Vue.component('actionSheet', actionSheet);
        Vue.component('preloader', preloader);
        Vue.component('toast', toast);
    }
}