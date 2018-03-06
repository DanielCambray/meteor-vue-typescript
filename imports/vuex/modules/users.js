

const users = {
    namespaced: true,
    state: {
        users: null,
    },
    mutations: {
        updateUsers(state, value) {
            console.log('users state mutated')
            state.users = value
        }
    },
    actions: {

    }
}

export default users


