<template>
    <v-card>
        <v-toolbar
            dark
            flat
            color="primary"
        >
            <v-toolbar-title>{{ projectItem.name }}</v-toolbar-title>
            <v-spacer />

            <project-edit
                :project="projectItem"
                @updateName="updateName"
            />

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
            <task-list
                ref="taskList"
                :list="projectItem.taskList"
            />
        </v-card-text>

        <v-divider />
        <v-card-actions>
            <task-new
                @create="createTask"
            />
        </v-card-actions>
    </v-card>
</template>

<script>
    import api from '../../util/mixins/api/api';
    import ProjectEdit from './ProjectEdit.vue';
    import TaskList from '../task/TaskList.vue';
    import TaskNew from '../task/TaskNew.vue';

    export default {
        name: 'Project',
        components: { ProjectEdit, TaskList, TaskNew },
        mixins: [api],
        props: {
            project: { type: Object, required: true },
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
            updateName(name) {
                this.projectItem.name = name;
            },
            remove() {
                this.askForConfirmation('Remove Project', 'Are you sure you want to remove this project? All of it\'s task will be removed as well.', () => {
                    this.delete(`/projects/${this.projectItem._id}`).then(() => {
                        this.$emit('remove', this.projectItem._id);
                        this.showMessage('Project removed successfully!', 'success');
                    });
                });
            },
            createTask(taskName) {
                this.post(`/projects/${this.projectItem._id}/task`, { name: taskName }).then(({ data }) => {
                    this.projectItem.taskList.push(data);
                    this.$refs.taskList.addNew(data);
                });
            },
        },
    };
</script>

<style scoped>

</style>
