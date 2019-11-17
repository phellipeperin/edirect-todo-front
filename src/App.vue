<template>
    <v-app>
        <v-content>
            <router-view />
        </v-content>

        <message-container />
    </v-app>
</template>

<script>
    import api from './util/mixins/api/api';
    import loginService from './util/mixins/login/loginService';

    import MessageContainer from './components/feedback/MessageContainer.vue';

    export default {
        name: 'App',
        components: { MessageContainer },
        mixins: [api, loginService],
        created() {
            this.createInterceptors();
            const authToken = window.localStorage.getItem('authToken');
            if (authToken) {
                this.doLogin(authToken);
            } else {
                this.$router.replace('/');
            }
        },
    };
</script>
