<!-- /imports/ui/AppMenu.vue -->
<template>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link :to="{ name:'home', exact: true }"  class="navbar-brand" >Navbar</router-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link :to="{ name:'home', exact: true }" class="nav-link" >Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name:'test' }" class="nav-link">Test</router-link>
                    </li>
                    <li class="nav-item" v-if="user">
                        <router-link :to="{ name:'user' }" class="nav-link">User</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>

                <authmenu></authmenu>

            </div>

        </nav>
</template>

<script lang="ts">

    import AuthMenu from '/imports/ui/auth/AuthMenu.vue'

    export default {
        name: 'app',
        data() {
            return {
            }
        },
        meteor: {
            data: {
            },
        },
        methods: {

        },
        components: {
            authmenu : AuthMenu,
        },
        metaInfo: {

        },
        computed: {
            user() {
                return this.$store.state.account.user
            }
        },
    }
    
</script>