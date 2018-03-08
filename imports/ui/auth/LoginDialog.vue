<template>

    <div class="modal fade" id="login-dialog" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submitForm">

                        <div class="form-group">
                            <label>Username</label>
                            <input v-model="formData.username" class="form-control mr-sm-2" type="input" placeholder="Username">
                        </div>

                        <div class="form-group">
                            <label>Password</label>
                            <input v-model="formData.password" class="form-control mr-sm-2" type="password" placeholder="Password">
                        </div>

                    </form>

                    <div class="alert alert-danger" role="alert" id="login-dialog-msg" v-if="loginError.reason">{{loginError.reason}}</div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="submitForm()">Login</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    username: '',
                    password: ''
                }
            }
        },
        computed : {
            loginError() {
                return this.$store.state.account.loginError;
            }
        },
        methods: {
            submitForm() {
                this.$store.dispatch('account/submitLoginForm', this.formData).then(function(){
                    $('#login-dialog').modal('hide');
                }).catch(function(error){
                });
            }
        }
    }
</script>