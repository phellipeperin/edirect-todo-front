<template>
    <v-container fluid>
        <v-row>
            <v-col
                v-for="project in projectList"
                :key="project._id"
                cols="12"
                md="4"
            >
                <project
                    :project="project"
                    @remove="remove"
                />
            </v-col>
            <v-col
                cols="12"
                md="4"
            >
                <project-new @add="addNew" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import api from '../../util/mixins/api/api';

    import Project from './Project.vue';
    import ProjectNew from './ProjectNew.vue';

    export default {
        name: 'ProjectList',
        components: { Project, ProjectNew },
        mixins: [api],
        data() {
            return {
                projectList: [],
            };
        },
        created() {
            this.get('/projects').then(({ data }) => {
                this.projectList = data;
            });
        },
        methods: {
            addNew(project) {
                this.projectList.push(project);
            },
            remove(id) {
                this.projectList = this.projectList.filter(elem => elem._id !== id);
            },
        },
    };
</script>

<style scoped>

</style>
