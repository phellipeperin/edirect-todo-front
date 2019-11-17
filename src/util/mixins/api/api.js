import axios from 'axios';
import headerParam from './headerParam';
import feedback from '../feedback/feedback';

const instance = axios.create({
    baseURL: '/api',
});

export default {
    name: 'api',
    mixins: [headerParam, feedback],
    methods: {
        get(url = '') { return instance.get(url); },
        post(url = '', data = {}) { return instance.post(url, data); },
        put(url = '', data = {}) { return instance.put(url, data); },
        delete(url = '') { return instance.delete(url); },
        createInterceptors() {
            instance.interceptors.request.use((config) => {
                this.$store.commit('openRequest');
                const newConfig = config;
                newConfig.headers.Authorization = this.getAuthorizationToken();
                return newConfig;
            }, error => Promise.reject(error));

            instance.interceptors.response.use((response) => {
                this.$store.commit('closeRequest');
                return response;
            }, (error) => {
                this.$store.commit('closeRequest');
                if (error.response.status === -1 || error.response.status === 401) {
                    window.localStorage.setItem('authToken', '');
                    window.location.replace('/');
                } else if (error.response.status === 400 || error.response.status === 409) {
                    this.showMessage(error.response.data, 'warning');
                } else if (error.response.status === 502) {
                    this.showMessage('Ops! Seems like our server is down. Try again in a few minutes.', 'error');
                } else if (error.response.status >= 500 && error.response.status <= 599) {
                    this.showMessage('Ops! Something went wrong.', 'error');
                }
                return Promise.reject(error);
            });
        },
    },
};
