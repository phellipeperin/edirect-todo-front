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

    export default {
        name: 'Login',
        mixins: [api],
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
                    this.post('/login', { username: this.username, password: this.password }).then(({ data }) => {
                        window.localStorage.setItem('authToken', data);
                        this.get('/profile').then(({ data: profileData }) => {
                            this.$store.commit('user', profileData);
                            this.$router.push('/project');
                        });
                    });
                }
            },
        },
    };
</script>

<style scoped>

</style>
