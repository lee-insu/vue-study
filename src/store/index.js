import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		nickname: '',
	},
	mutations: {
		setUsername(state, nickname) {
			state.nickname = nickname;
		},
		clearUsername(state) {
			state.nickname = '';
		},
	},
	actions: {},
	getters: {
		isLogin(state) {
			return state.nickname !== '';
		},
	},
});
