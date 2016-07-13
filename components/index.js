import alert from './alert/alert.vue'
import confirm from './confirm/confirm.vue'

export default {
    install(Vue){
        Vue.component('alert', alert);
        Vue.component('confirm', confirm);
    }
}