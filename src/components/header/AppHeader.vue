<template>
    <v-app-bar
        color="primary"
        dark
    >
        <v-toolbar-title>EDirectInsure TODO List</v-toolbar-title>

        <v-spacer />
        <v-toolbar-items>
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn
                        text
                        v-on="on"
                    >
                        {{ $store.state.user.name }}
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item @click="logout">
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
    import api from '../../util/mixins/api/api';

    export default {
        name: 'AppHeader',
        mixins: [api],
        methods: {
            logout() {
                this.post('/logout').then(() => {
                    window.localStorage.setItem('authToken', '');
                    window.location.replace('/');
                });
            },
        },
    };
</script>

<style scoped>

</style>
