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

    import MessageContainer from './components/feedback/MessageContainer.vue';

    export default {
        name: 'App',
        components: { MessageContainer },
        mixins: [api],
        created() {
            this.createInterceptors();
            const authToken = window.localStorage.getItem('authToken');
            if (authToken) {
                this.get('/profile').then(({ data }) => {
                    this.$store.commit('user', data);
                    this.$router.push('/project');
                });
            } else {
                this.$router.replace('/');
            }
        },
    };
</script>
