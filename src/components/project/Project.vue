<template>
    <v-card>
        <v-toolbar
            dark
            flat
            color="primary"
        >
            <v-toolbar-title>{{ project.name }}</v-toolbar-title>
            <v-spacer />

            <v-btn
                icon
                dark
                color="white"
                @click="edit"
            >
                <v-icon>$vuetify.icons.edit</v-icon>
            </v-btn>

            <v-btn
                icon
                dark
                color="white"
                class="ml-2"
                @click="remove"
            >
                <v-icon>$vuetify.icons.delete</v-icon>
            </v-btn>
        </v-toolbar>

        <v-card-text>
            atividades
        </v-card-text>

        <v-divider />
        <v-card-actions>
            acoes
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'Project',
        props: {
            project: { type: Object, default: () => {} },
        },
        methods: {
            edit() {
            },
            remove() {

            },
        },
    };
</script>

<style scoped>

</style>
