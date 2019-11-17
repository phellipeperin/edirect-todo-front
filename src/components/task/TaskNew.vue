<template>
    <v-row>
        <v-col
            cols="12"
            md="8"
        >
            <v-text-field
                v-model="name"
                hide-details
                label="Task name"
                class="mt-0 pt-0"
                @keypress.enter="add"
            />
        </v-col>
        <v-col
            cols="12"
            md="4"
        >
            <v-btn
                block
                text
                color="accent"
                @click="add"
            >
                Add
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
    import feedback from '../../util/mixins/feedback/feedback';

    export default {
        name: 'TaskNew',
        mixins: [feedback],
        data() {
            return {
                name: '',
            };
        },
        methods: {
            add() {
                if (!this.name) {
                    this.showMessage('Please input task\'s name', 'warning');
                } else {
                    this.$emit('create', this.name);
                }
            },
            clear() {
                this.name = '';
            },
        },
    };
</script>

<style scoped>

</style>
