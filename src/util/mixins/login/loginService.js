import api from '../api/api';

export default {
    name: 'loginService',
    mixins: [api],
    methods: {
        doLogin(token) {
            window.localStorage.setItem('authToken', token);
            this.get('/profile').then(({ data: profileData }) => {
                this.$store.commit('user', profileData);
                this.$router.push('/project');
            });
        },
    },
};
