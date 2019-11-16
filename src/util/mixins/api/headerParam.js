export default {
    name: 'headerParam',
    methods: {
        getAuthorizationToken() {
            const authToken = window.localStorage.getItem('authToken');
            if (authToken) return authToken;
            return '';
        },
    },
};
