import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

const account = {
    namespaced: true,
    state: {
        user: null,
    },
    mutations: {
        updateUser(state, value) {
            state.user = value
        },
        isUsernameValid(state, value) {
            state.isUsernameValid = value
        }
    },
    actions: {
        submitRegisterForm({commit, state}, formData) {
            Accounts.createUser(formData, error => {
                error ? console.log(error.reason) : console.log('user registered')
            })
        },
        submitLoginForm({commit, state}, formData) {
            Meteor.loginWithPassword(formData.username, formData.password, error => {
                error ? console.log(error.reason) : console.log('user logged in')
            })
        },
        logout() {
            Meteor.logout(() => {
                console.log('user logged out')
            })
        }
    }
}

export default account


