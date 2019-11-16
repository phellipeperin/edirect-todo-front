<template>
    <v-container fluid>
        <v-row>
            <v-col
                v-for="project in projectList"
                :key="project.id"
                cols="12"
                md="4"
            >
                <project :project="project" />
            </v-col>
            <v-col
                cols="12"
                md="4"
            >
                <project-new />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Project from './Project.vue';
    import ProjectNew from './ProjectNew.vue';

    export default {
        name: 'ProjectList',
        components: { Project, ProjectNew },
        data() {
            return {
                projectList: [],
            };
        },
        created() {
            // TODO list projects
            this.projectList.push({
                id: 1,
                name: 'Project 01',
            });
        },
    };
</script>

<style scoped>

</style>
