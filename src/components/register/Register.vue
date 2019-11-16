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

    export default {
        name: 'Register',
        mixins: [api],
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
                    this.post('/users', this.user).then(({ data }) => {
                        console.log(data);
                    });
                }
            },
        },
    };
</script>

<style scoped>

</style>
