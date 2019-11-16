<template>
    <v-container>
        <v-row justify="center">
            <v-col
                cols="12"
                md="6"
                class="pa-8"
            >
                <login v-if="!onRegister" />
                <register v-if="onRegister" />

                <v-btn
                    text
                    block
                    color="accent"
                    class="mt-2"
                    @click="toggleRegister"
                >
                    <span v-if="!onRegister">Sign-up</span>
                    <span v-if="onRegister">Back to login</span>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Login from '../components/login/Login.vue';
    import Register from '../components/register/Register.vue';

    export default {
        name: 'LoginView',
        components: { Login, Register },
        data() {
            return {
                onRegister: false,
            };
        },
        methods: {
            toggleRegister() {
                this.onRegister = !this.onRegister;
            },
        },
    };
</script>

<style scoped>

</style>
