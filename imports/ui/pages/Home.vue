App.vue<template>
    <div class="app container">

        <h1>Test Meteor + Vue + Typescript</h1>

        <auth></auth>
        <users></users>
        <links></links>
    </div>
</template>

<script lang="typescript">
    import { Meteor } from 'meteor/meteor'

    import Vue from 'vue';
    import Component from 'vue-class-component';

    import Links from '/imports/ui/components/Links.vue';
    import Auth from '/imports/ui/auth/Auth.vue'
    import Users from '/imports/ui/components/Users.vue'

    export default {
        name: 'home',
        data() {
            return {
            }
        },
        meteor: {
            data: {
            },
            meteorUser() {
                this.$store.commit('account/updateUser', Meteor.user());
            }
        },
        methods: {
            
        },
        components: {
            Links,
            Auth,
            Users,
        },
        metaInfo: {
            title: 'Home',
        },
        computed: {

            count() {
                return this.$store.state.account.count
            }
        },
    }
</script>

<style>
    body {
        margin: 30px;
    }

    a {
        color: #b82a39;
        text-decoration: none;
    }

    h1, h2 {
        font-weight: normal;
    }
</style>
