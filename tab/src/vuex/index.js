const state = {
	dataIndex: 0
}

const mutations = {
	change_Index(state, index) {
		state.dataIndex = index
	}
}

const actions = {
	changeIndex ({commit}, index) {
		commit('change_Index', index)
	}
}

const getters = {

}

export default {
	state,
	mutations,
	actions,
	getters
}