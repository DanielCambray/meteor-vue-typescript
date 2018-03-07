<template>
    <form class="form-inline">
        <button class="btn btn-primary" @click="logout" type="button">Logout</button>
    </form>
</template>

<script>
    export default {
        methods: {
            logout() {
                this.$store.dispatch('account/logout')
            }
        }
    }
</script>