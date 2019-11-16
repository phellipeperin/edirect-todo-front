<template>
    <v-list>
        <task
            v-for="task in taskList"
            :key="task._id"
            :task="task"
        />
    </v-list>
</template>

<script>
    export default {
        name: 'TaskList',
        props: {
            list: { type: Array, default: () => [] },
        },
        data() {
            return {
                taskList: [],
            };
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
