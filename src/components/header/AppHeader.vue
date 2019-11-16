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
                        User Name
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
    export default {
        name: 'AppHeader',
        methods: {
            logout() {
                // TODO
            },
        },
    };
</script>

<style scoped>

</style>
