import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

var App = Vue.extend({});

var router = new VueRouter()

router.map({
  
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app');

window.router = router