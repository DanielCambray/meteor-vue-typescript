<template>
    <div>
        <h2>List of users</h2>
        <div v-if="users.length">
            <p v-for="user in users">{{user.username}} ({{user.emails[0].address}})</p>
        </div>
        <p v-else>There are no users yet. Why don't you register some?</p>
    </div>
</template>

<script>
    import { Meteor } from 'meteor/meteor';

    export default {
        meteor: {
            $subscribe: {
                'users': [],
            },
            usersHelper() {
                console.log("UsersHelper");
                console.log(Meteor.users.find({}).fetch());
                console.log("End");
                return this.$store.commit('users/updateUsers', Meteor.users.find({}).fetch())
            }
        },
        computed: {
            users() {
                return this.$store.state.users.users
            },

        },
        methods: {

        }
    }
</script>
