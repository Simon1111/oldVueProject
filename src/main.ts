import Vue from 'vue';
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Datetime from 'vue-datetime'
import VueCropper from 'vue-cropper' 
import router from './router';
import store from './store';
import './registerServiceWorker';

import App from '@/components/App.vue';

import 'vuetify/dist/vuetify.min.css'
import 'vue-datetime/dist/vue-datetime.css'

Vue.config.productionTip = false;

window.axios = require('axios');

// Vue.config.productionTip = false
Vue.use(Vuetify,Vuex,VueCropper,Datetime)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
