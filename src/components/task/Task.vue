<template>
    <v-list-item class="px-0">
        <template v-slot:default="{ active, toggle }">
            <v-list-item-action>
                <v-checkbox
                    v-model="task.done"
                    color="primary"
                    @change="toggleDone"
                />
            </v-list-item-action>

            <v-list-item-content>
                <v-list-item-title>{{ task.name }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action v-if="!task.done">
                <task-edit
                    :project-id="projectId"
                    :task="task"
                    @updateName="updateName"
                />
            </v-list-item-action>

            <v-list-item-action v-if="!task.done">
                <v-btn
                    icon
                    small
                    color="error"
                    @click="remove"
                >
                    <v-icon small>
                        $vuetify.icons.delete
                    </v-icon>
                </v-btn>
            </v-list-item-action>

            <v-list-item-action v-if="task.done">
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-icon
                            color="grey lighten-1"
                            v-on="on"
                        >
                            mdi-calendar-check
                        </v-icon>
                    </template>

                    <span>
                        {{ task.doneAt | dateHour }}
                    </span>
                </v-tooltip>
            </v-list-item-action>
        </template>
    </v-list-item>
</template>

<script>
    import api from '../../util/mixins/api/api';

    import TaskEdit from './TaskEdit.vue';

    export default {
        name: 'Task',
        components: { TaskEdit },
        mixins: [api],
        props: {
            task: { type: Object, required: true },
            projectId: { type: String, required: true },
        },
        methods: {
            toggleDone() {
                this.put(`/projects/${this.projectId}/tasks/${this.task._id}/done`, { done: this.task.done })
                    .then(() => {
                        this.$emit('toggleDone', this.task._id, this.task.done);
                    }).catch(() => {
                        this.task.done = !this.task.done;
                    });
            },
            updateName(name) {
                this.task.name = name;
            },
            remove() {
                this.delete(`/projects/${this.projectId}/tasks/${this.task._id}`).then(() => {
                    this.showMessage('Task removed successfully', 'success');
                    this.$emit('remove', this.task._id);
                });
            },
        },
    };
</script>

<style scoped>

</style>
