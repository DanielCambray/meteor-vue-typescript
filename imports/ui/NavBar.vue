<template>
    <div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
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

    </div>
</template>

<script lang="ts">

    import Loginform from '/imports/ui/auth/LoginForm.vue'
    import Logindialog from '/imports/ui/auth/LoginDialog.vue'
    import Registerdialog from '/imports/ui/auth/RegisterDialog.vue'
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
            meteorUser() {
                this.$store.commit('account/updateUser', Meteor.user());
            }
        },
        methods: {

        },
        components: {
            authmenu : AuthMenu,
            Loginform,
            Logindialog,
            Registerdialog
        },
        metaInfo: {

        },
        computed: {


        },
    }


</script>