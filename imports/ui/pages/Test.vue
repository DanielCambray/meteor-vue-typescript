<template>
    <div class="app container">
        
        <h1>Test page</h1>

    </div>
</template>

<script lang="typescript">
    export default {
        name: 'test',
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
            title: 'Test',
        }
    }

</script>


