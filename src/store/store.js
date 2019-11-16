import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        request: {
            active: 0,
            lock: false,
        },
        feedbackMessage: {},
        user: {},
    },
    mutations: {
        // Request
        openRequest(state) {
            state.request.active += 1;
        },
        closeRequest(state) {
            state.request.active -= 1;
            if (!state.request.active) state.request.lock = false;
        },

        // Feedback
        setFeedbackMessage(state, payload) {
            state.feedbackMessage = payload;
        },
        closeFeedbackMessage(state) {
            state.feedbackMessage.show = false;
        },

        // User
        user(state, payload) {
            state.user = payload;
        },
    },
});
