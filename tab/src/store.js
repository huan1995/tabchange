import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import demo from './vuex'

export default new Vuex.Store({
	modules: {
		demo: demo
	}
})