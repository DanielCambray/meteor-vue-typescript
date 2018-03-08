import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

const account = {
    namespaced: true,
    state: {
        user: null,
        loginError: {},
        registerError: {},
    },
    mutations: {
        updateUser(state, value) {
            state.user = value
        },
        isUsernameValid(state, value) {
            state.isUsernameValid = value
        },
        updateLoginError(state, value) {
            state.loginError = value;
        },
        updateRegisterError(state, value) {
            state.registerError = value;
        }
    },
    actions: {
        submitRegisterForm({commit, state}, formData) {
            return new Promise((resolve, reject)=> {
                Accounts.createUser(formData, function(error) {
                    if (error) {
                        commit('updateRegisterError', error);
                        reject(error);
                    } else {
                        commit('updateRegisterError', {});
                        resolve();
                    }
                })
            })
        },
        submitLoginForm({commit, state}, formData) {
            return new Promise((resolve, reject)=> {
                Meteor.loginWithPassword(formData.username, formData.password, function(error) {
                    if (error) {
                        commit('updateLoginError', error);
                        reject(error);
                    } else {
                        commit('updateLoginError', {});
                        resolve();
                    }
                })
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


