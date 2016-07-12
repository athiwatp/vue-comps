import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import VueComps from '../components'
import Dpr from './utils/dpr'

import './assets/index.less';
import appModule from './views/app.vue'
import alertModule from './views/alert.vue'

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
    }
})

router.redirect({
  '*': '/app'
})

router.start(App, '#app');

window.router = router;