<template>
    <div>
        <h4 class="subtitle-1">
            To Do
        </h4>
        <v-list>
            <task
                v-for="task in undoneTaskList"
                :key="task._id"
                :task="task"
            />
            <h6
                v-if="!undoneTaskList.length"
                class="overline"
            >
                No to do tasks.
            </h6>
        </v-list>

        <h4 class="subtitle-1 mt-3">
            Done
        </h4>
        <v-list>
            <task
                v-for="task in doneTaskList"
                :key="task._id"
                :task="task"
            />
            <h6
                v-if="!doneTaskList.length"
                class="overline"
            >
                No done tasks.
            </h6>
        </v-list>
    </div>
</template>

<script>
    import Task from './Task.vue';

    export default {
        name: 'TaskList',
        components: { Task },
        props: {
            list: { type: Array, default: () => [] },
        },
        data() {
            return {
                taskList: [],
            };
        },
        computed: {
            undoneTaskList() { return this.taskList.filter(elem => !elem.done); },
            doneTaskList() { return this.taskList.filter(elem => elem.done); },
        },
        created() {
            this.taskList = this.list;
        },
        methods: {
            addNew(task) {
                this.taskList.push(task);
            },
            remove(id) {
                this.taskList = this.taskList.filter(elem => elem._id !== id);
            },
        },
    };
</script>

<style scoped>

</style>
