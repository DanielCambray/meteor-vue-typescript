<template>

    <form class="form-inline my-2 my-lg-0" @submit.prevent="submitForm">
        <input v-model="formData.username" class="form-control mr-sm-2" type="input" placeholder="Username">
        <input v-model="formData.password" class="form-control mr-sm-2" type="password" placeholder="Password">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
    </form>

</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            submitForm() {
                this.$store.dispatch('account/submitLoginForm', this.formData)
            }
        }
    }
</script>