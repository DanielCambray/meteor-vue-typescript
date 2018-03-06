import Vue from 'vue'
import Vuex from 'vuex'
import account from '/imports/vuex/modules/account.js'
import users from '/imports/vuex/modules/users.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        account: account,
        users: users
    }
})

export default store


/*
Vue.use(Vuex)

const modules =  {
    auth: authModule
}

const state = {
    users: []
}

const getters = {

}

const mutations = {
    updateUsers(state, value) {
        console.log('users state mutated')
        state.users = value
    }
}

const actions = {

}

export default new Vuex.Store({
    modules,
    state,
    getters,
    mutations,
    actions
})*/