import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state'
import * as actions from './action'
import mutations from './mutations'
import * as getters from './getters'
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})