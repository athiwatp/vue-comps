import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import VueComps from '../components'
import Dpr from './utils/dpr'

import './assets/index.less';
import appModule from './views/app.vue'
import alertModule from './views/alert.view.vue'
import confirmModule from './views/confirm.view.vue'
import promptModule from './views/prompt.view.vue'
import actionSheetModule from './views/actionsheet.view.vue'
import preloaderModule from './views/preloader.view.vue'
import toastModule from './views/toast.view.vue'
import notifyModule from './views/notify.view.vue'
import gridModule from './views/grid.view.vue'
import popoverModule from './views/popover.view.vue'
import modalModule from './views/modal.view.vue'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueComps)

var App = Vue.extend({});

var router = new VueRouter()

router.map({
    '/app': {
        component: appModule
    },
    '/alert': {
        component: alertModule
    },
    '/confirm': {
        component: confirmModule
    },
    '/prompt': {
        component: promptModule
    },
    '/notify': {
        component: notifyModule
    },
    '/actionsheet': {
        component: actionSheetModule
    },
    '/preloader': {
        component: preloaderModule
    },
    '/toast': {
        component: toastModule
    },
    '/grid': {
        component: gridModule
    },
    '/popover': {
        component: popoverModule
    },
    '/modal': {
        component: modalModule
    }
})

router.redirect({
  '*': '/app'
})

router.start(App, '#app');

window.router = router;