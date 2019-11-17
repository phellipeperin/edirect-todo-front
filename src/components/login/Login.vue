<template>
    <div>
        <h2 class="display-2 text-uppercase mb-4 text-center">
            Login
        </h2>

        <v-text-field
            v-model="username"
            hide-details
            label="Username"
            @keyup.enter="login"
        />

        <v-text-field
            v-model="password"
            hide-details
            type="password"
            label="Password"
            class="mt-2"
            @keyup.enter="login"
        />

        <v-btn
            block
            large
            color="accent"
            class="mt-2"
            @click="login"
        >
            Login
        </v-btn>
    </div>
</template>

<script>
    import api from '../../util/mixins/api/api';
    import loginService from '../../util/mixins/login/loginService';

    export default {
        name: 'Login',
        mixins: [api, loginService],
        data() {
            return {
                username: '',
                password: '',
            };
        },
        methods: {
            login() {
                if (!this.username || !this.password) {
                    this.showMessage('Please fill both fields.', 'warning');
                } else {
                    this.post('/login', { username: this.username, password: this.password }).then(({ data: token }) => {
                        this.doLogin(token);
                    });
                }
            },
        },
    };
</script>

<style scoped>

</style>
