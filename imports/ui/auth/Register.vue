<template>
    <div>
        <form @submit.prevent="submitForm">
            <h3>Register</h3>
            <label>username</label>
            <input v-model="formData.username"/>
            <label>email</label>
            <input v-model="formData.email"/>
            <label>password</label>
            <input v-model="formData.password" type="password"/>
            <button>Register</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    username: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            submitForm() {
                this.$store.dispatch('account/submitRegisterForm', this.formData)
            }
        }
    }
</script>