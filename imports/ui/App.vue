<template>
    <div class="app container">
        <h1>Test Meteor + Vue + Typescript</h1>
        <links></links>
    </div>
</template>

<script lang="typescript">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    import Links from './Links.vue';

    export default {
        data() {
            return {
            }
        },
        meteor: {
            data: {
            }
        },
        methods: {
        },
        components: {
            Links,
        },
        metaInfo: {
            title: 'Links',
        }
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
