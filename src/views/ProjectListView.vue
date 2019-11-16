<template>
    <div>
        <app-header />

        <project-list />
    </div>
</template>

<script>
    import AppHeader from '../components/header/AppHeader.vue';
    import ProjectList from '../components/project/ProjectList.vue';

    export default {
        name: 'ProjectListView',
        components: { AppHeader, ProjectList },
    };
</script>

<style scoped>

</style>
