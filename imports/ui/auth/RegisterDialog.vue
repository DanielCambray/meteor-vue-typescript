<template>


    <div class="modal fade" id="register-dialog" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Register</h5>
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
                            <label>Email address</label>
                            <input v-model="formData.email" class="form-control mr-sm-2" type="email" placeholder="Email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>

                        </div>

                        <div class="form-group">
                            <label>Password</label>
                            <input v-model="formData.password" class="form-control mr-sm-2" type="password" placeholder="Password">
                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="submitForm()">Register</button>
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
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            submitForm() {
                this.$store.dispatch('account/submitRegisterForm', this.formData);
                $('#register-dialog').modal('hide');

            }
        }
    }
</script>