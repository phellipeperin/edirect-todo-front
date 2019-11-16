<template>
    <div>
        <v-btn
            ref="btnActivator"
            class="btn-activator"
            @click.stop="dialog = true"
        />

        <v-dialog
            v-model="dialog"
            max-width="340"
        >
            <v-card>
                <v-card-title class="title">
                    {{ title }}
                </v-card-title>
                <v-card-text>{{ text }}</v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn
                        text
                        @click="cancel"
                    >
                        {{ cancelText }}
                    </v-btn>
                    <v-btn
                        text
                        color="accent"
                        @click="confirm"
                    >
                        {{ confirmText }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: 'ConfirmationModal',
        props: {
            title: { type: String, required: true },
            text: { type: String, required: true },
            cancelText: { type: String, default: 'Cancel' },
            confirmText: { type: String, default: 'Confirm!' },
            successCallback: { type: Function, required: true },
            errorCallback: { type: Function, default: () => ({}) },
        },
        data() {
            return {
                dialog: false,
            };
        },
        methods: {
            open() {
                this.$refs.btnActivator.$el.click();
            },
            cancel() {
                if (this.errorCallback) this.errorCallback();
                this.dialog = false;
            },
            confirm() {
                if (this.successCallback) this.successCallback();
                this.dialog = false;
            },
        },
    };
</script>

<style scoped lang="scss">
    .btn-activator {
        display: none !important;
    }
</style>
