<template>
    <v-card>
        <v-toolbar
            dark
            flat
            color="primary"
        >
            <v-toolbar-title>{{ projectItem.name }}</v-toolbar-title>
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
    import api from '../../util/mixins/api/api';

    export default {
        name: 'Project',
        mixins: [api],
        props: {
            project: { type: Object, default: () => {} },
        },
        data() {
            return {
                projectItem: {},
            };
        },
        created() {
            this.projectItem = this.project;
        },
        methods: {
            edit() {
            },
            remove() {
                this.askForConfirmation('Remove Project', 'Are you sure you want to remove this project? All of it\'s task will be removed as well.', () => {
                    this.delete(`/projects/${this.projectItem._id}`).then(() => {
                        this.$emit('remove', this.projectItem._id);
                    });
                });
            },
        },
    };
</script>

<style scoped>

</style>
