<template>
    <v-dialog
        v-model="dialog"
        max-width="340"
    >
        <template v-slot:activator="{ on }">
            <v-btn
                icon
                dark
                color="white"
                @click.stop="open"
            >
                <v-icon>$vuetify.icons.edit</v-icon>
            </v-btn>
        </template>

        <v-card>
            <v-card-title class="title">
                Edit Project
            </v-card-title>

            <v-card-text>
                <v-text-field
                    v-model="name"
                    hide-details
                    label="Project name"
                    @keyup.enter="confirm"
                />
            </v-card-text>

            <v-card-actions>
                <v-spacer />
                <v-btn
                    text
                    @click="cancel"
                >
                    Cancel
                </v-btn>
                <v-btn
                    text
                    color="accent"
                    @click="confirm"
                >
                    Update
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import api from '../../util/mixins/api/api';

    export default {
        name: 'ProjectEdit',
        mixins: [api],
        props: {
            project: { type: Object, required: true },
        },
        data() {
            return {
                dialog: false,
                name: '',
            };
        },
        methods: {
            open() {
                this.name = this.project.name;
                this.dialog = true;
            },
            cancel() {
                this.dialog = false;
            },
            confirm() {
                this.put(`/projects/${this.project._id}`, { name: this.name })
                    .then(() => {
                        this.$emit('updateName', this.name);
                        this.showMessage('Project updated successfully', 'success');
                        this.dialog = false;
                    });
            },
        },
    };
</script>

<style scoped>

</style>
