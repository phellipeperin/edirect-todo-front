<template>
    <v-list-item>
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
        </template>

        <v-spacer />
        <div v-if="!task.done">
            botoes
        </div>
    </v-list-item>
</template>

<script>
    import api from '../../util/mixins/api/api';

    export default {
        name: 'Task',
        mixins: [api],
        props: {
            task: { type: Object, required: true },
        },
        methods: {
            toggleDone() {
                this.put(`/task/${this.task.id}/done`, { done: this.task.done })
                    .then(() => {
                        this.$emit('toggleDone', this.task._id, this.task.done);
                    }).catch(() => {
                        this.task.done = !this.task.done;
                    });

            },
        },
    };
</script>

<style scoped>

</style>
