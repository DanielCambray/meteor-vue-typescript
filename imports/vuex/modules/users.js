

const users = {
    namespaced: true,
    state: {
        users: null,
    },
    mutations: {
        updateUsers(state, value) {
            state.users = value
        }
    },
    actions: {

    }
}

export default users


