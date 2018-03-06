<template>
    <button @click="logout">Logout</button>
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