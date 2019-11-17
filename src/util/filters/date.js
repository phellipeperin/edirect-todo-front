import Vue from 'vue';
import moment from 'moment';

Vue.filter('date', value => moment(value).format('DD/MM/YYYY'));
Vue.filter('hour', value => moment(value).format('HH:mm'));
Vue.filter('dateHour', value => moment(value).format('DD/MM/YYYY HH:mm'));
