<template>
    <v-container
        fluid
        class="project-new-container grey lighten-3 py-8"
    >
        <v-row justify="center">
            <v-col
                cols="8"
                class="text-center"
            >
                <h2 class="headline mb-4">
                    Create a new project
                </h2>
                <v-text-field
                    v-model="projectName"
                    hide-details
                    placeholder="Project name"
                    @keyup.enter="create"
                />
                <v-btn
                    block
                    large
                    color="accent"
                    class="mt-2"
                    @click="create"
                >
                    Create Project
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import api from '../../util/mixins/api/api';

    export default {
        name: 'ProjectNew',
        mixins: [api],
        data() {
            return {
                projectName: '',
            };
        },
        methods: {
            create() {
                if (!this.projectName) {
                    this.showMessage('Please input the project\'s name', 'warning');
                } else {
                    this.post('/projects', { name: this.projectName }).then(({ data }) => {
                        this.$emit('add', data);
                        this.showMessage('Project added successfully!', 'success');
                        this.projectName = '';
                    });
                }
            },
        },
    };
</script>

<style scoped lang="scss">
    .project-new-container {
        border-radius: 8px;
    }
</style>
