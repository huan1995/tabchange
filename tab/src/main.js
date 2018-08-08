// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from 'components/App'
import routes from './router'
import VueRouter from 'vue-router'

// 引入store
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(require('vue-wechat-title')); //实例化参数 重置title值

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	linkExactActiveClass: 'active',
	routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
