export default {
    name: 'headerParam',
    methods: {
        getAuthorizationToken() {
            const { authToken } = window.localStorage;
            if (authToken) return authToken;
            return '';
        },
    },
};
