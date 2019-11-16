<template>
    <v-app-bar
        color="deep-purple accent-4"
        dark
    >
        <v-toolbar-title>Page title</v-toolbar-title>

        <v-spacer />
        <v-menu
            left
            bottom
        >
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
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
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
