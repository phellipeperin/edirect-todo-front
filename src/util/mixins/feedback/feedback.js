import EventBus from '../../event/EventBus';

export default {
    name: 'feedback',
    methods: {
        showMessage(message, type) {
            this.$store.commit('setFeedbackMessage', {
                text: message, color: this.getColorByType(type), show: true, timeout: 5000,
            });
        },
        getColorByType(type = 'info') {
            let color = '';
            if (type === 'success') color = 'success';
            else if (type === 'warning') color = 'warning';
            else if (type === 'error') color = 'error';
            return color;
        },
        askForConfirmation(title, text, successCallback, errorCallback, confirmText = 'Confirm', cancelText = 'Cancel') {
            EventBus.$emit('openConfirmationModal', {
                title,
                text,
                confirmText,
                cancelText,
                successCallback,
                errorCallback,
            });
        },
    },
};
