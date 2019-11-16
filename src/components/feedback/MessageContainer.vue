<template>
    <div>
        <v-snackbar
            :key="$store.state.feedbackMessage.text"
            v-model="$store.state.feedbackMessage.show"
            multi-line
            bottom
            :color="$store.state.feedbackMessage.color"
            :timeout="$store.state.feedbackMessage.timeout"
        >
            {{ $store.state.feedbackMessage.text }}
            <v-btn
                color="white"
                text
                @click="closeMessage"
            >
                Fechar
            </v-btn>
        </v-snackbar>

        <confirmation-modal
            ref="confirmationModal"
            :title="confirmationMessage.title"
            :text="confirmationMessage.text"
            :confirm-text="confirmationMessage.confirmText"
            :cancel-text="confirmationMessage.cancelText"
            :success-callback="confirmationMessage.successCallback"
            :error-callback="confirmationMessage.errorCallback"
        />
    </div>
</template>

<script>
    import EventBus from '../../util/event/EventBus';

    import ConfirmationModal from './ConfirmationModal.vue';

    export default {
        name: 'MessageContainer',
        components: { ConfirmationModal },
        data() {
            return {
                confirmationMessage: {
                    title: '',
                    text: '',
                    successCallback: () => ({}),
                },
            };
        },
        created() {
            EventBus.$on('openConfirmationModal', (message) => {
                this.confirmationMessage = message;
                this.$refs.confirmationModal.open();
            });
        },
        methods: {
            closeMessage() {
                this.$store.commit('closeFeedbackMessage');
            },
        },
    };
</script>

<style scoped lang="scss">

</style>
