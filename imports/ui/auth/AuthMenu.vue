<template>
    <div>
        
        <logout v-if="user"></logout>

        <div class="float-right" v-if="!user">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#login-dialog">
                Login
            </button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#register-dialog">
                Register
            </button>
        </div>

        <login></login>
        <register></register>
    </div>
</template>

<script>
    import LoginDialog from '/imports/ui/auth/LoginDialog.vue'
    import Logout from '/imports/ui/auth/Logout.vue'
    import RegisterDialog from '/imports/ui/auth/RegisterDialog.vue'

    export default {
        components: {
            login: LoginDialog,
            logout: Logout,
            register: RegisterDialog
        },
        computed: {
            user() {
                return this.$store.state.account.user
            }
        }
    }
</script>

<style>

</style>