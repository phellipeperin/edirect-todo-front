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
        },
    };
</script>
