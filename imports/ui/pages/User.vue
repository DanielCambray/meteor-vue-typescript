<template>
    <div class="app container">
        
        <h1>User for logged people only !</h1>

    </div>
</template>

<script lang="typescript">
    export default {
        name: 'my-account',
        data() {
            return {}
        },
        meteor: {
            data: {},
            meteorUser() {
                this.$store.commit('account/updateUser', Meteor.user());
            }
        },
        methods: {},
        components: {},
        metaInfo: {
            title: 'My account',
        }
    }
</script>


