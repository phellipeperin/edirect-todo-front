<template>
    <div>
        <h2 class="display-2 text-uppercase mb-4 text-center">
            Sign-up
        </h2>

        <v-text-field
            v-model="user.username"
            hide-details
            label="Username"
            @keyup.enter="register"
        />

        <v-text-field
            v-model="user.name"
            hide-details
            label="Name"
            class="mt-2"
            @keyup.enter="register"
        />

        <v-text-field
            v-model="user.password"
            hide-details
            type="password"
            label="Password"
            class="mt-2"
            @keyup.enter="register"
        />

        <v-btn
            block
            large
            :disabled="Boolean(this.$store.state.request.active)"
            :loading="Boolean(this.$store.state.request.active)"
            color="accent"
            class="mt-2"
            @click="register"
        >
            Sign-up
        </v-btn>
    </div>
</template>

<script>
    import api from '../../util/mixins/api/api';
    import loginService from '../../util/mixins/login/loginService';

    export default {
        name: 'Register',
        mixins: [api, loginService],
        data() {
            return {
                user: {
                    username: '',
                    name: '',
                    password: '',
                },
            };
        },
        methods: {
            register() {
                if (!this.user.username || !this.user.name || !this.user.password) {
                    this.showMessage('Please fill all the fields.', 'warning');
                } else {
                    this.post('/users', this.user).then(({ data: token }) => {
                        this.showMessage('Signed up successfully!', 'success');
                        this.doLogin(token);
                    });
                }
            },
        },
    };
</script>

<style scoped>

</style>
